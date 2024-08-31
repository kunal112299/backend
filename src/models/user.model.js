import mongoose, { Schema } from "mongoose"

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        reguired: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true
    },
    email: {
        type: String,
        reguired: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    fullname: {
        type: String,
        reguired: true,
        trim: true,
        index: true
    },
    avatar: {
        type: String,
        required: true
    },
    coverImage: {
        type: String,
    },
    watchHistory: [
        {
            type: Schema.Types.ObjectId,
            ref: "Video"
        }
    ],
    password: {
        type: String,
        required: [true, "password is required"]
    },
    refreshToken: {
        type: String,
    }
},{
    timestamps: true
})


export const User = mongoose.model("User", userSchema)