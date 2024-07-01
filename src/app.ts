import express from 'express'
import 'dotenv/config'
import index from './routes/index'
import mongoose from './models'
const app = express()
const PORT = process.env.PORT || 3000;


app.use(express.json())
//comme
app.use('/', index)

mongoose.connection.on('connected', () => console.log('MongoDB connected...'))
mongoose.connection.on('error', (err) => console.log('MongoDB error: ',err))
app.listen(PORT, () => console.log(`server is running on port ${PORT}`))

