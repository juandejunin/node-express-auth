import {Schema, model} from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new Schema(
  {

    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
//los statics son formas de llamar un metodo sin necesidad de instanciar un objeto

//el usuario me da una contraseña, utilizo el metodo bcript para obetner un texto cifrado
userSchema.statics.encryptPassword = async (password) => {
  //genSalt es una forma de aplicar un algoritmo en este caso le damos el recorrido
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};


// la funcion comparePassword compara la contraseña guardada con la que el usuario esta tipeando, retorna true o false
userSchema.statics.comparePassword = async (password, receivedPassword) => {
  return await bcrypt.compare(password, receivedPassword)
}



export default model('User', userSchema);
