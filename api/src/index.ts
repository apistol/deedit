import { AppDataSource } from "./data-source"
import express from "express"
import morgan from "morgan"
import authRoutes from "./routes/auth"
import cookieParser from 'cookie-parser'
import cors from 'cors'
import {User} from "./entity/User";

// Initialize environment variables
require('dotenv').config()

// Initialize the Express application
const app = express()

app.use(express.json())
app.use(morgan('dev'))
app.use(cookieParser())
app.use(cors())

// Define routes
app.get("/", async (_, res) => {
    await AppDataSource.initialize()

    const users = await AppDataSource.manager.find(User);
    return res.json(users)
})

app.use("/api/auth", authRoutes)

// Set the port
const port = process.env.PORT || 5001

// Function to establish database connection
async function connectToDatabase() {
    try {
        await AppDataSource.initialize()
        console.log("Database connected successfully")



    } catch (err) {
        console.error("Database connection failed", err)
        throw err // Rethrow to prevent starting the server
    }
}

// Start the server
app.listen(port, async () => {
    console.log('Server running at:' + port)

    // Connect to the database before starting the server
    try {
        await connectToDatabase()

    } catch (err) {
        console.error("Failed to start the server due to database connection error")
    }
})

export default app
