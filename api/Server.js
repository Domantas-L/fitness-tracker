const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app =express();
const PORT = process.env.PORT || 3001;


app.use(cors());
app.use(express.json());
app.use((req,res,next)=>
{
    console.log(req.method,req.path);
    next();
});

let tasks =[
     {
        Done: true,
        id: 1,
        name: "Open github",
        Start: "12:45",
        End: "14:45"
    }
]
let nextID = 2;

app.get("/Tasks",(req,res)=>
{
    res.json({data:tasks})
});

app.listen(PORT, ()=>{
console.log(`Server running on http://localhost:${PORT}`);
});