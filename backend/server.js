const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app  = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri,
    err => {
        if(err) throw err;
        console.log('connected to MongoDB')
    });

// Creating Routes for Applications
const exerciseRouter = require('./routes/exercises');
const userRouter = require('./routes/users');

app.use('/exercises', exerciseRouter);
app.use('/users', userRouter);

app.listen(port , () =>{
    console.log(`Server is running on port: ${port}`);
});