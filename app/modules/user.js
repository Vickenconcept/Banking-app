import { Schema, model, models } from "mongoose";

const userSchema = new Schema ({
    email: {
        type: String,
        unique: true,
        required: [true, "Email is required "],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Invalid Email Adress"]
    },
    fullName: {
        type: String,
        required: [true, "Full name required"],
        minLength: [4, "Full name should be atleast 4 characters long"],
        maxLength: [30, "Full name should be less then 30 characters"],
    },
    password: {
        type: String,
        required: [true, "Password name required"],
        select: false,
    },
    phoneNumber: {
        type: Number,
        required: [true, "PhoneNumber name required"],

    }
})

const User = model.User || model("User", UserSchema)

export default User