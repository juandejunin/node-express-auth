import app from './src/app'
import './src/database'
require('dotenv').config()

const PORT = process.env.PORT

app.listen(PORT)
console.log('Server listen on port ', `${PORT}`)