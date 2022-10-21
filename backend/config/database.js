const mongoose = require("mongoose");

const uri =
  "mongodb+srv://khanh96:@realtimechatapp.soabdwn.mongodb.net/?retryWrites=true&w=majority";

async function databaseConnect() {
  try {
    await mongoose.connect(uri, {});
    console.log("Connect");
  } catch (error) {
    console.log(error);
  }
}

module.exports = databaseConnect;
