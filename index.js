const express = require("express")
const mongoose = require('mongoose');
require('dotenv').config()
const app = express() 
const port = 3000;

mongoose.connect(process.env.DATABASE_URL)
.then(()=>{
    console.log("database connected successfully")
}).catch((err) =>{
    console.log(err.message || err)
})

//route define
app.post("/addtodo", (req,res) =>{
    return res
    .status(201)
    .json({ sucess: true , message : "todo created successfully"})
})

app.get("/gettodo", (req, res ) =>{
    return res
    .status(200)
    .json({ success: true, message: "todo fetch successfull"});
})

app.listen(port, ()=>{
    console.log(`server is running port ${port}`)
})