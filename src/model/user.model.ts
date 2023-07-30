import { Sequelize,Model,DataTypes } from "sequelize";
// import { DataType,Model,Sequelize } from "sequelize-typescript";

const sequelize = new Sequelize("sqlite::memory:");

class User extends Model {
  public name!: string;
  public email!: string;
  public password!: string;
  public role!:string

  // timestamps!
  
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true,
      validate:{
        isEmail:true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM,
      allowNull:false,
      values:['admin','performer']
    },
  },
  {
    timestamps:true,
    sequelize,
    // modelName: "User",
    tableName:"users"
  }
);
// User.sync({force:true});
export default User;
