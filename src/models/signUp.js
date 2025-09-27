import mongoose from "mongoose";
const signUpSchmea=new mongoose.Schema(
    {
    name: String,
    email: String,
    phone: String,
    password: String,
    confirmPassword: String,
    }
)
const SignUp=mongoose.model(
    "SignUp",
    signUpSchmea
)
export default SignUp;