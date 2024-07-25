const express= require("express");
const mongoose =require("mongoose");
require('dotenv').config({path:'./Config/.env'})
mongoose.connect(process.env.db)
.then(()=>{
        console.log("Connection Successful")
}).catch((e)=>{
    console.log("No connection")
})