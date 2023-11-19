import { AppDataSource } from "./data-source"
import { Product } from "./entity/Product"
import express from "express"
import morgan from "morgan"
import authRoutes from "./routes/auth"
import trim from "./middlewares/trim";
import cookieParser from 'cookie-parser'
require('dotenv').config();


const app = express()

app.use(express.json())
app.use(morgan('dev'))
app.use(trim)
app.use(cookieParser())

app.get( "/" , (_, res) => res.send("Hello"))
app.use("/api/auth", authRoutes)

app.listen(5001, async () => {
    console.log('Server running at 5001')
    try {
        await AppDataSource.initialize();
    }catch (err) {
        console.log(err)
    }
})

