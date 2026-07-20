const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app =express();
const PORT = process.env.PORT || 3000;


app.use(cors({origin:"https://localhost:3000"}));
app.use(express.json());
app.use((req,res,next)=>
{
    console.log(req.method,req.path);
    next();
});

