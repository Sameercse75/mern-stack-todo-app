import express from 'express'
import dotenv from 'dotenv'
import { connectDb } from './config/db.js'
import todoRoutes from './routes/todo.route.js'


dotenv.config()
const PORT = process.env.PORT

const app = express()

app.use(express.json())

app.use('/api/todos',todoRoutes)

app.listen(PORT , ()=>{
  console.log(`port running on ${PORT}`);
  connectDb()
})