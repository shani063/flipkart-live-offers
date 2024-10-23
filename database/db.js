import mongoose from 'mongoose';


const Connection = async (URL) =>{
  
try {
  
    await mongoose.connect(URL);
    console.log("You successfully connected to MongoDB!");

    } catch(error) {
      console.log("connection unsuccessful to MongoDB",error.message);
    }
}

export default Connection;