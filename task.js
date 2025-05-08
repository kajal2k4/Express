//write express js to define 1 json array of 3 studentects having property name and age on a homepage,display json studentect if user
//request sorted name in sort page and all names along with their age should be printed in desc order of age

const expr=require('express')
const app=expr()


let student=[
    {'name':'chintu', 'age':2},
    {'name':'fuddi', 'age':20},
    {'name':'chintu k papa', 'age':19},
]
app.get('/',(req,res)=>{
    res.send(student)
})

app.get('/',(req,res)=>{
    res.send(student)
})
app.get('/sort',(req,res)=>{
    res.set('Content-Type','text/html')
    sorted = student.sort((a,b)=>b.age-a.age)
    obj=''
    for(i=0;i<sorted.length;i++){
        obj+=sorted[i].name+sorted[i].age+'<br>'
    }
    res.send(obj)
})
app.listen(3000)



















