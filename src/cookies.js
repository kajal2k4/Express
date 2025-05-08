const express = require('express')
const cp = require('cookie-parser')   
const app = express()
app.use(cp())
app.get('/',(req,res)=>{
    res.cookie("fname","Priyen") 
    res.cookie("lname","Patel")
   
    res.send("Cookie set");
})
app.get('/cookie',(req,res)=>{
    res.write(JSON.stringify(req.cookies))
    res.write("-------------")
    res.write(req.cookies.fname+" ")
    res.send()
})

app.get("/clear",(req,res)=>{
    res.clearCookie("fname")
    res.send(req.cookies)
})
app.listen(8010, () => {
    console.log("Server is running on port 8010")
})