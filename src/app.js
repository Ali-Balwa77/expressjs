const express = require('express');
const app = express();
const path = require('path');

const staticpath = path.join(__dirname,'../akbar');

app.use(express.static(staticpath));

app.get('',(req,res) => {
    res.send('public');
})

app.listen(8000)  