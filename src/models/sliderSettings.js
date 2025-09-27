import mongoose from "mongoose";
const sliderSettingschmea=new mongoose.Schema(
    {
        slideImage1Url:String,
        slideImage2Url:String,
        slideImage3Url:String,
        slideImage4Url:String,
    }
)
const SliderSettings=mongoose.model(
    "SliderSettings",
    sliderSettingschmea
)
export default SliderSettings