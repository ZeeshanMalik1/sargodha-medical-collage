import mongoose from "mongoose";
const faculitiesSchmea=new mongoose.Schema(
    {
        name:String,
        dept:String,
        designation:String,
        imageUrl:String,
    }
)
const Faculities=mongoose.model("Fculities",faculitiesSchmea)
export default Faculities;