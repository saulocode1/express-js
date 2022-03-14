const express = require("express");
const app = express();

app.get("/", (req, res) => { // get path "/"
    res.send("Teste"); // send "Teste" to path "/"
});

app.listen(8081, () => { // open server on 8081 port
    console.log("Server online!");
});