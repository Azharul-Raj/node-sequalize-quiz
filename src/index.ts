import express from 'express';
import cors from 'cors'

import connectDB from '../config/db.config'

const app=express();
app.use(express.json());
app.use(cors())

const port=process.env.PORT|| 3000

app.listen(port,()=>{
    console.log(`Server is running at ${port}`)
})
connectDB()