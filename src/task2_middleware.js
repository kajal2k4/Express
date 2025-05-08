var express = require("express");
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static("../public", { index: "task2_middleware.html" }));
app.post("/login", (req, res) => {
  let subscriptionMessage = "";
  if (req.body.subscribe) {
    subscriptionMessage = "<p>Thank you for the subscription!</p>";
  }
  user = req.body.name;
  email = req.body.email;
  res.set("Content-Type", "text/html");
  res.write(
            `
            <h3>Welcome ${user}</h3>
            <p>Your email id is ${email}</p>
            ${subscriptionMessage}
            <a href="/">Logout</a>
            `
  );
  res.send();
});

app.listen(3000);
