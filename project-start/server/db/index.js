const dotenv = require('dotenv');
dotenv.config({ path: '../.env' });

import mongoose from 'mongoose';
mongoose.connect(process.env.MONGODB_URI,{ useNewUrlParser: true, useFindAndModify: false }, (err, database) => {
    if (err) return console.log(err);
});

const db = mongoose.connection;

db.on('error', (error) =>{
    console.log(error);
});

db.on('open', () =>{
    console.log("Database connection is open");
});

export default db;