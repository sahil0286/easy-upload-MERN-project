import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const DBconnection = async ()=>{
    // console.log(process.env.PORT);
    const MONGODB_URI= "mongodb://user:user123@ac-qljy523-shard-00-00.jchdmnj.mongodb.net:27017,ac-qljy523-shard-00-01.jchdmnj.mongodb.net:27017,ac-qljy523-shard-00-02.jchdmnj.mongodb.net:27017/?ssl=true&replicaSet=atlas-1480sz-shard-0&authSource=admin&retryWrites=true&w=majority";
    try {
        await mongoose.connect(MONGODB_URI,{ useNewUrlParser:true , useUnifiedTopology: true});
        console.log("Database connected Successfully");
    } catch (error) {
        console.log(`Error whiche connecting Database: ${error.message}`)
    }
}

export default DBconnection;