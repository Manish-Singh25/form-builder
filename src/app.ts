import express from 'express'
import 'dotenv/config'
import index from './routes/index'
import mongoose from './models'
const app = express()
const PORT = process.env.PORT || 3000;


app.use(express.json())
//comme
app.use('/', index)

mongoose.connection.on('open', () => console.log('MongoDB connected...'))
app.listen(PORT, () => console.log(`server is running on port ${PORT}`))

