const mongoose = require('mongoose');
require('dotenv').config();


// Define the MongoDB connection URL

// const mongoURL = "mongodb://127.0.0.1:27017/hotels"   // local URL
// const mongoURL = "mongodb+srv://faisal:virtual*123@cluster0.kwsi9o5.mongodb.net/"
// const mongoURL = process.env.MONGODB_URL_LOCAL
const mongoURL = process.env.MONGODB_URL

// Set up MongoDB connection

mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

// Get the default connection 
// Mongoose maintains a defualt connection object representing the MongoDb connection

const db = mongoose.connection;

// Define event listeners for database connection

db.on('connected', () => {
  console.log('connected to MongoDB server');
});

db.on('error', (err) => {
  console.log('MongoDB connection error',err);
});

db.on('disconnected', () => {
  console.log('MongoDB disconnected');
});


// export the database connection

module.exports = db;