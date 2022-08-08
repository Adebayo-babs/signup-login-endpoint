// external imports
const mongoose = require("mongoose");
require('dotenv').config()

async function dbConnect() {
  // use mongoose to connect this app to our database on mongoDB using the DB_URL (connection string)
  mongoose
    .connect(
       "mongodb+srv://Adebayo:welldone@cluster0.kjsnn.mongodb.net/authsDB?retryWrites=true&w=majority",
      {
        //   these are options to ensure that the connection is done properly
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    )
    .then(() => {
      console.log("Successfully connected to MongoDB Atlas!");
    })
    .catch((error) => {
      console.log("Unable to connect to MongoDB Atlas!");
      console.error(error);
    });
}

module.exports = dbConnect;