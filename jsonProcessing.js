const expr = require("express");
const app = expr();

student = { name: "kajal", age: 20 };
data = JSON.stringify(student);
app.get("/", (req, res) => {
  res.set("Content-Type", "application/json");
  // res.write(JSON.stringify(student))
  res.send(student);
});
// app.get('/',(req,res)=>{
//     res.write(data.name)
//     res.send()
// })

app.listen(3002);
