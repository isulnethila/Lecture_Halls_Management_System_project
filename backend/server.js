const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://isulnethila2020:s3dAgkCZpBifjuGT@assigment1.raanrvi.mongodb.net/lecture-halls?retryWrites=true&w=majority&appName=assigment1', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB connected");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    process.exit(1); // Exit the process with failure
  }
};

module.exports = connectDB;