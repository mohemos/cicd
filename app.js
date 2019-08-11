const express = require('express'),
    app = express();


app.listen(1000,(err)=>{
    err && console.log("An error occured",err);

    console.log("Server is connected");
});