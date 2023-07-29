import dotenv from 'dotenv'
import { Sequelize } from 'sequelize';
dotenv.config()

const connectDB=async()=>{
    const sequelize=new Sequelize('quiz-db','root',`${process.env.DB_PASS}`,{
        host:"localhost",
        dialect:"mysql"
    })
    try {
        await sequelize.authenticate()
        console.log('Database connected successfully.')
    } catch (error) {
        console.log('unable to connect',error)
    }
}
export default connectDB;