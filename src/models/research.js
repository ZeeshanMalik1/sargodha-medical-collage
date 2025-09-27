import mongoose from "mongoose";
const researchSchmea=new mongoose.Schema(
    {
        title:String,
        discription:String,
        date:String,
        fileUrl:String,
    }
)
const Research=mongoose.model("Research",researchSchmea)
export default Research;