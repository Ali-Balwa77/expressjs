const express = require('express');
const app = express();

app.get("/",(req,res)=>{
    res.send('hello home page');
})
app.get("/about",(req,res)=>{
    res.send('hello about page');
})
app.get("/contact",(req,res)=>{
    res.send('hello contact page');
})
app.get("/temp",(req,res)=>{
    
    res.send({
        id :1,
        name:'Akbar',
    });
    
    console.log(data);
    
})
app.listen(8000)