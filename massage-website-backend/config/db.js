const mongoose = require('mongoose');
const config = require('config');

// Retrieve the MongoDB URI from the configuration or environment variable
const db = process.env.MONGODB_URI || config.get('MONGODB_URI');

const connectDB = async () => {
  try {
    // Set the strictQuery option to suppress the warning
    mongoose.set('strictQuery', false);
    
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;