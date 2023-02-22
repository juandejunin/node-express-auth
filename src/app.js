import express from "express"
import morgan from 'morgan'
import pkg from '../package.json'


import productRoutes from './routes/product.routes'
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes"
import { createRoles } from "./libs/initialSetup";

const app = express()
createRoles()

app.set('pkg',pkg)


app.use(morgan('dev'))
app.use(express.json())

app.get('/', (req, res) => {
    res.json({
        nombre:app.get('pkg').name,
        author: app.get('pkg').author,
        description:app.get('pkg').description,
        version:app.get('pkg').version
    })
})

app.use('/api/subscription',productRoutes)
app.use("/api/auth", authRoutes);
app.use('/api/user',userRoutes)

export default app


