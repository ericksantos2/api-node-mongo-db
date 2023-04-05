import mongoose from "mongoose";

mongoose.connect("mongodb+srv://erick:123@cluster0.bb1csrm.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;