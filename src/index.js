import app from './app'
import './database'
require('dotenv').config()

const PORT = process.env.PORT

app.listen(PORT)
console.log('Server listen on port ', `${PORT}`)