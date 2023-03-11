const express = require("express");
const app = express();
const port = 3001;
app.get("/", (req, res) => {

    var a=1;
    var b=2;
    var c= a+b;
    return res.send("Hello world !")
});
app.listen(port, () =>
  console.log(`App running on port 3001 !!!. http://localhost:${port}`)
);
