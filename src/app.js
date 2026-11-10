import express, { application } from 'express'
import rentalRoutes from './routes/rental.routes.js'
import {errorHandler} from './middlewares/error.middleware.js'
import dotenv from 'dotenv'
dotenv.config()
const PORT = process.env.PORT

const app = express()
app.use(express.json())

app.get('/', (req,res) => {
    res.json('servidor funcionando')
})

app.use('/api/rental', rentalRoutes)
app.use(errorHandler)

app.listen(PORT, async() => {
    console.log(`servidro corriendo en http://localhost:${PORT}`)
})