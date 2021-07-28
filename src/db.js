require("dotenv").config();

const mongoose = require("mongoose");

const { MONGODB_URI } = process.env;

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection

db.on('error', err => {
    console.log("err", err)
});

db.on("open", () => {   
    console.log("Connected")
})