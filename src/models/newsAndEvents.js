import mongoose from "mongoose";

const newsAndEventsSechema = new mongoose.Schema(
    {
        title: String,
        date:String,
        discription:String,
        imageUrl:String,
    }
)

const NewsEvents = mongoose.model("NewsAndEvents",newsAndEventsSechema)
export default NewsEvents;