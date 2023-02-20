import Product from "../models/Product.js";

export const createProduct = async (req, res) => {

    //aplicarndo desestructuración
    const { name, category, price, imgURL } = req.body
    //creando un nuevo objeto y guardando el nuevo objeto en una nueva constante
    const newProduct = new Product({ name, category, price, imgURL })

    //utilizando el metodo .save guardamos el objeto en BBDD
    const productSave = await newProduct.save()

    res.status(201).json(productSave)   

}

export const getProducts = async (req, res) => {
    const products = await Product.find()
    res.status(200).json(products)

}

export const getProductById = (req, res) => {

}

export const updateProductById = (req, res) => {

}

export const deleteProductById = (req, res) => {

}