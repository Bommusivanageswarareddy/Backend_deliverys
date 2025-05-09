import mongoose from "mongoose";
 
export const connectDB = async () => {
    (await mongoose.connect('mongodb+srv://deliveryhub:1999siva@cluster0.xsgpg.mongodb.net/food_delivery').then(()=>console.log("DB Connected")));
}