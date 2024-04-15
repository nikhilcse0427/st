const express = require('express');
const mongoose = require('mongoose');

const app = express();
mongoose.connect('mongodb+srv://nikhilverma0427:nikhilverma0427@cluster0.2l8clq0.mongodb.net//newdb');

const userSchema = new mongoose.Schema({
    name: String,
    age: Number
});
const UserModel = mongoose.model("Student", userSchema); // Corrected

app.get("/getUsers", (req, res) => {
    UserModel.find({}).then(function(users) {
        res.json(users);
    }).catch(function(err) {
        console.log(err);
    });
});

app.listen(3001, () => {
    console.log("Server is running");
});
