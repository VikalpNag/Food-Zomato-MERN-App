const mongoose = require('mongoose');

function connectDB() {
    mongoose.connect('mongodb://localhost:27017/zomato').then((result) => {
        console.log('Connected to DB')

    }).catch((err) => {
        console.log("Problem in connecting DB")
    });
};

module.exports = connectDB;