const express = require('express');
const path = require('path');
const app = express();
const templatespath = path.join(__dirname,'../templates')

app.set('view engine', 'hbs');
app.set('views',templatespath)
app.get("/about",(req,res)=>{
    res.render("index");
});
app.get("",(req,res)=>{
    res.send('Hello Akbar');
});
app.listen(3000);