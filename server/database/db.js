import mongoose from "mongoose";


const DBconnection = async ()=>{
    const MONGODB_URI= "mongodb+srv://user:user123@easy-upload.jchdmnj.mongodb.net/?retryWrites=true&w=majority";
    try {
        await mongoose.connect(MONGODB_URI,{ useNewUrlParser:true});
        console.log("Database connected Successfully");
    } catch (error) {
        console.log(`Error whiche connecting Database: ${error.message}`)
    }
}

export default DBconnection;