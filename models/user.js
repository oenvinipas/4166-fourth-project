const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {type: String, required: [true, "First name field cannot be empty"]},
    lastName: {type: String, required: [true, "Last name field cannot be empty"]},
    email: {type: String, required: [true, "Email field cannot be empty"], unique: true},
    password: {type: String, required: [true, "Password field cannot be empty"]}
});