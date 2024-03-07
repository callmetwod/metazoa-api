import express from "express"
import { testConnection } from "./database/connection.js"
import cors from "cors"
import { routes } from "./routes/index.routes.js"

const app = express()
const port = 35439

const cors_config = { origin: "*" }

app.use(express.json())
app.use(cors(cors_config))
app.use(routes)

app.listen(port, async () => {
    await testConnection()
    console.log(`Server is running on port ${port}`)
})  

