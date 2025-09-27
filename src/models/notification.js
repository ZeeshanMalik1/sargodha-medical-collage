import mongoose from "mongoose";
const notificationSchmea=new mongoose.Schema(
    {
        title:String,
        message:String,
        date:String,
        imageUrl:String,
    }
)
const Notifications=mongoose.model("Notifications",notificationSchmea)
export default Notifications;