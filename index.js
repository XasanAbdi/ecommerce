import express from 'express'
import conectDB from './database/db.js'
import userRouter from './routes/userRouter.js'
import dotenv from 'dotenv'


dotenv.config();
conectDB()
const app=express()
app.use(express.json())
app.use('/api/user',userRouter)

const port=process.env.port|| 8888
 app.listen(()=>{
    console.log(`Server is runing on port 8888 ${port}`)
 })