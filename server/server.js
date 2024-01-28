import express from 'express'
import morgan from "morgan"
import cors from "cors"
import { config } from 'dotenv'
import router from './router/route.js'
import connect from "./database/conn.js"

const app = express()

//App Middleware
app.use(morgan("tiny"))
app.use(cors())
app.use(express.json())
config()

//Application PORT
const port = process.env.PORT || 8080


//Routes
app.use("/api", router) //APIS

app.get("/", (req, res) => {
    try {
        res.json("Get Request")
    }
    catch (error) {
        res.json(error)
    }
})

//Start server only when valid connection
connect().then(() => {

    try {
        app.listen(port, () => {
            console.log(`Server Connected to http://localhost:${port}`);
        })
    } catch (error) {
        console.log("Cannot connect to the server");
    }

}).catch(error => {
    console.log("Invalid Database Connection")
})
