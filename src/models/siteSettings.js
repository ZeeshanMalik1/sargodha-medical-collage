import mongoose from "mongoose";
const siteSettingsSchmea=new mongoose.Schema({
    logoUrl:String,
})
const SiteSettings=mongoose.model("SiteSettings",siteSettingsSchmea)
export default SiteSettings