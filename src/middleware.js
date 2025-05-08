expr = require('express')
app = expr()

cb1=(req,res,next)=>{
    console.log('yohohohoho')
    res.write("Welcome")
    next()
}
cb2=(req,res,next)=>{
    res.write(" Meow ")
    next()
}
app.use('/data',cb1,cb2)
app.get('/data',(req,res)=>{
    res.write("hello")
    res.send()
})
app.listen(9000)