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


app.post("/Tasks",(req,res) =>
{
    const {Done,name,Start,End} =req.body;
    if(!name|| !Start||!End){
        return res.status(400).json({
    error:{ code: "VALIDATION_ERROR", message: "name, start time and end time required"},
        });
    }
    const created = {id : nextID++, name, Start, End};
    tasks.push(created);
    res.status(201).json({data:created});
});

app.listen(PORT, ()=>{
console.log(`Server running on http://localhost:${PORT}`);
});