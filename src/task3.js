// Create one HTML file which contains two number type input fields, one dropdown which contains options like (select,
// addition, subtraction, multiplication, division) and one submit button.
// The input fields must contain the value greater than 0 else it will give a message “Please enter the valid message”.
//  Also, user must select any of the formula from the dropdown else give a message “You have not selected any formula”.
//   (Message will be displayed on “/calc” page.)
// If one formula is selected and numbers are entered then respective calculations will be performed on the page “/calc”

var express = require("express");
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static('../public',{index:'task3.html'}));

app.post('/calc', (req, res) => {
    let a=parseInt(req.body.num1)
    let b=parseInt(req.body.num2)
    let fm=req.body.formula
    let result
    if(fm=='add'){
        result=a+b
    }
    else if(fm=='sub'){
        result=a-b
    }
    else if(fm=='sub'){
        result=a-b
    }
    else if(fm=='div'){
        result=a/b
    }
    res.write(result.toString())
    res.send()
})
    
app.listen(3000)
