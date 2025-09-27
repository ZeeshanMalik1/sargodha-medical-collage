import mongoose from "mongoose";
const departmentsSchmea=new mongoose.Schema(
    {
        name:String,
        discription:String,
        imageUrl:String,
    }
)
const Departments=mongoose.model("Departments",departmentsSchmea)
export default Departments;