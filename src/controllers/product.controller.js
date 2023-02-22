import Product from "../models/Product.js";

export const createProduct = async (req, res) => {

    //aplicarndo desestructuración
    const { name, paymentDate, price } = req.body
    //creando un nuevo objeto y guardando el nuevo objeto en una nueva constante
    const newProduct = new Product({ name, paymentDate, price })

    //utilizando el metodo .save guardamos el objeto en BBDD
    const productSave = await newProduct.save()

    res.status(201).json(productSave)   

}

export const getProducts = async (req, res) => {
    const products = await Product.find()
    res.status(200).json(products)

}

export const getProductById = async (req, res) => {
    const { productId } = req.params;
  
    const product = await Product.findById(productId);
    res.status(200).json(product);
  };


  //en req.body se declara new:true de lo contrario mongoose muestra los datos nuevos y lo que necesitamos en este caso son los dato nuevos.
  export const updateProductById = async (req, res) => {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.productId,
      req.body,
      {
        new: true,
      }
    );
    res.status(204).json(updatedProduct);
  };

  export const deleteProductById = async (req, res) => {
    const { productId } = req.params;
  
    await Product.findByIdAndDelete(productId);
  
    // code 200 is ok too
    res.status(200).json({message: 'Delete subscription'});
  };