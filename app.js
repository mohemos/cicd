const express = require('express'),
    app = express();

app.get('/',(req,res)=>{
    res.send("<h1>Hello mum</h1>");
});

app.listen(1000,(err)=>{
    err && console.log("An error occured",err);

    console.log("Server is connected");
});