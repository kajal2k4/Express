// Write express js script to perform the tasks as asked below. (Post method)

// 1)Create one HTML file named ljform.html and add one form which contains username, password and submit button.
//  Data should be submitted by HTTP post method.

// 2)Submit button is of black color with white text. (External CSS)

// 3)On home page form should be displayed and while submitting the form, on next page named “/login” if username is
//  admin then it will display “Welcome admin” else display  “Please login with Admin name”.

var express = require("express");
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static('../public',{index:'ljform.html'}));
app.use(express.static('../style'));
app.post('/login', (req, res) => {
    let name=req.body.name
    if(name=='admin'){
        res.write('Welcome '+name)
    }
    else{
        res.write('Please login with Admin name')
    }
    res.send()
})
    
app.listen(3000)