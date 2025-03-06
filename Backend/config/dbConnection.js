import mongoose from "mongoose";
import dotenv from 'dotenv';

const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URI)
        .then(() => console.log('db connection successfull'))
        .catch((err) => console.log('db connection error', err));
}

export default dbConnection;