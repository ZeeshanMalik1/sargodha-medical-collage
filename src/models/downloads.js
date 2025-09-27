import mongoose from "mongoose";    
const downloadsSchmea=new mongoose.Schema(
    {
        title:String,
        discription:String,
        fileUrl:String,
    }

)
const Downloads=mongoose.model("Downloads",downloadsSchmea)
export default Downloads;