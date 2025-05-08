// var expr = require('express');
// var app = expr();
// app.use(expr.static( '../public'));
// app.listen(3000)

// path = require('path')
// expr = require('express')
// app = expr()

// // var sp=path.join(__dirname,'../Public')
// app.use(expr.static( '../public'));
// app.use(expr.static( '../style'));
// app.use(expr.static( '../image'));

// // app.get('/',(req,res)=>{
// //     res.sendFile(sp+'/index.html')
// // })
// app.listen(3008)

var express = require("express");
var app = express();
app.use(express.static("../public"));
app.get("/process-get", (req, res) => {
  response = {
    Username: req.query.firstname,
    Password: req.query.password,
  };
  console.log(response);
  res.send(response);
});
app.listen(8000);
