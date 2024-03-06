import express from "express"
import { testConnection } from "./database/connection.js"
import cors from "cors"
import { routes } from "./routes/index.routes.js"

const app = express()
const port = 3000

app.use(express.json())
app.use(cors())
app.use(routes)

app.listen(port, async () => {
    await testConnection()
    console.log(`Server is running on port ${port}`)
})  

