// Creating connection with mongodb database here.
import mongoose from 'mongoose';

export const connectUsingMongoose = async()=>{
    try {
      const mongoUri = process.env.MONGO_URI || "mongodb://0.0.0.0:27017/jobPortal2";
      await mongoose.connect(mongoUri);
        console.log("Mongodb connected using mongoose.");
    } catch (error) {
        console.log("Error while connecting to db");
        console.log(error);
    }
}
