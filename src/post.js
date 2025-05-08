
var express = require("express");
var app = express();
app.use(express.urlencoded({extended:false}));
app.post('/',(req,res)=>{
    let uname = req.body.firstname;
    let password = req.body.password;
    res.write(uname + " " + password)
    res.send()
})
app.listen(3000)