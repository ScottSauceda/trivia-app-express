const moment = require("moment");
const mongoose = require("mongoose");

const Schema = mongoose.Schema; 
const time = moment();

const userSchema = new Schema({
     email: {type: String, default: "", unique: true},
     username: {type: String, default: "", unique: true},
     password: {type: String, default: ""},
     time: {type: String, default: time.format("dddd, MMMM Do YYYY, h:mm:ss a")}
})
module.exports = mongoose.model("users", userSchema)