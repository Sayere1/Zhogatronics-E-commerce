import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    _id: { type: String, required: true},
    name: { type: String, required: true},
    email: { type: String, required: true, unique: true},
    imageUrl : { type: String, required: true},
    cartItem: { tpye: Object, default: {}}
}, {minimize: false})


const User = mongoose.models.user || mongoose.model("user", userSchema)

export default User

//mongodb+srv://yerecode_db_user:zho123ABC@cluster0.mniw2hb.mongodb.net/?appName=Cluster0

//qhcNuiG21zTGKy1e

//mongodb+srv://yerecode_db_user:qhcNuiG21zTGKy1e@cluster0.f2qak83.mongodb.net/?appName=Cluster0