import { RequestHandler,Request,Response } from "express";
// import User from "model/user.model";
import User from '../model/user.model'



const getUser:RequestHandler=async(req:Request,res:Response):Promise<void>=>{
    try {
        const users=await User.findAll();
        res.status(200).json({
            data:users,
            message:'request successful.'
        })
    } catch (error) {
        res.status(200).json({
            data:null,
            message:'something went wrong',error
        })
    }
}
const signup:RequestHandler=async(req:Request,res:Response)=>{
    try {
        const users=await User.create(req.body);
        console.log(users)
        res.status(200).json({
            data:users,
            message:'request successful.'
        })
    } catch (error) {
        res.status(400).json({
            data:null,
            message:'something went wrong',error
        })
    }
}



export default {getUser,signup}