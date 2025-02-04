import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

// Create a function for establishing the connection with the database
export const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`DATABASE IS SUCCESSFULLY CONNECTED WITH YOUR MONGODB || ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGO DB DATABASE CONNECTION ERROR", error);
        process.exit(1);
    }
};