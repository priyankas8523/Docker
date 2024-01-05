let express = require("express");
let app = express();
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.listen(8080);
console.log("Server Is On");
