const http = require("http"); // require http

/*
    req - require (get api data) / receive parameters
    res - responde (send api data) / render page
*/

http.createServer((req, res) => {
    res.end("Hello, world!"); // end (send message to res(response to user))
}).listen(8081); // create server on 8081 port

console.log("Server online.");
