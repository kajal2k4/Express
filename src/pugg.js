const express =require("express")

const app = express()

app.set('view engine','pug')
app.set('views',__dirname+'/../public')

app.get('/',(req,res)=>{
    res.render('one')
})

app.get('/data',(req,res)=>{
    const name=req.query.name
    const email=req.query.email
    const course=req.query.course
    res.render('form_output', { name, email, course })

})

app.listen(3000)