const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Process is running @ ${PORT}`);
});


const MONGODB_URI = process.env.MONGODB_URI;

// mongoose.connect(MONGODB_URI, {
// }).then(() => {
//       console.log('Connected to MongoDB');
// }).catch((error) => {
//      console.error('Error connecting to MongoDB:', error);
//      process.exit(1);
// });

// import mongoose from "mongoose";

console.log(MONGODB_URI);
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB:", err);
  });


  