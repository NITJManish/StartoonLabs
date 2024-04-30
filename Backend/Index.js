const express =require('express');
const app=express();


app.get('/',(res,req)=>{
    res.setEncoding("hello StartLabs");
})

app.listen(4000,()=>{
    console.log("server run on port 4000");
})