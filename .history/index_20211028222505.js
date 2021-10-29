require('dotenv').config();
const path = require('path');
const express = require('express');
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 5001

app.get('/', (req,res)=>{
    res.json({message:"hello from server"});
})

app.get('*')