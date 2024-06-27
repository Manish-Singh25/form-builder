import express from 'express'
import mongoose from "mongoose";
import 'dotenv/config'

const app = express()
const PORT = process.env.PORT || 3000;


app.use(express.json())

app.listen(PORT, () => console.log(`server is running on port ${PORT}`))

