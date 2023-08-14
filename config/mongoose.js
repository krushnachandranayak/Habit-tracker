const mongoose = require('mongoose');

// storing the db on mongo atlas
const DB = "mongodb+srv://krushnachandranayak308:Sunil123@cluster0.qh9m6a4.mongodb.net/";

mongoose.connect(DB).then(()=>{
    console.log('Connection successful!');
}).catch((err) => console.log("no connection " + err));

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));

db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});

module.exports = db;