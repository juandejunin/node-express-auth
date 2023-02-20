import express from "express"
import morgan from 'morgan'
import pkg from '../package.json'

import productRoutes from './routes/product.routes'

const app = express()

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

app.use('/products',productRoutes)

export default app


