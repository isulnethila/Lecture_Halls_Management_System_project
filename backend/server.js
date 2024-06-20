const mongoose=require('mongoose');

const connectDB=async ()=>{
    try{
    await mongoose.connect('mongodb+srv://project:09UZ4nt0PYVo5gPJ@cluster0.n0kig6o.mongodb.net/Lecture_Halls_Management_System');
    console.log("DB connected")
    }
    catch(error){
        console.error("Failed to cennect to Mondodb:",error);
    }

}

module.exports=connectDB