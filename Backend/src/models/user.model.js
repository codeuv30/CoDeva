import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        minLength: 3,
        maxLength: 20
    },
    role: {
        type: String,
        required: true,
        enum: ["admin", "user"]
    },
    email: {
        type: String,
    },
    avatar_url: {
        type: String,
    },
    github_id: {
        type: String,
        required: true,
        unique: true
    },
    github_username: {
        type: String,
        required: true
    },
    github_access_token: {
        type: String,
        required: true,
        select: false
    }
}, { timestamps: true });

const userModel = mongoose.model("user", userSchema);
export default userModel;