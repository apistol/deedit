import { AppDataSource } from "./data-source"
import express from "express"
import morgan from "morgan"
import authRoutes from "./routes/auth"
import cookieParser from 'cookie-parser'
import cors from 'cors';


require('dotenv').config();


const app = express()

app.use(express.json())
app.use(morgan('dev'))
// app.use(trim)
app.use(cookieParser())

app.get( "/" , (_, res) => res.json("Hello"))
app.use("/api/auth", authRoutes)
app.use(cors());

const portDev = 5001
const port = process.env.PORT || portDev;

app.listen(port, async () => {
    console.log('Server running at:' + port)
    try {
        await AppDataSource.initialize();

    }catch (err) {
        console.log(err)
    }
})

export default app;

