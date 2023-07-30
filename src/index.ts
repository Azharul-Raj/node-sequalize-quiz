import express from 'express';
import cors from 'cors';
import 'reflect-metadata'

import connectDB from '../config/db.config'
import userRouter from './routes/user.route'


const app=express();
app.use(express.json());
app.use(cors())


const port=process.env.PORT|| 3000;


app.listen(port,()=>{
    console.log(`Server is running at ${port}`)
})
connectDB()

app.use('/user',userRouter)