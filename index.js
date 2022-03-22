const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/a") {
        res.writeHead(302, {
            location: "/b",
        });
    } else if (req.url === "/b") {
        res.writeHead(302, {
            location: "/a",
        });
    } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h1>Hello World!<h1>");
    }
    res.end();
});

server.listen(8080, () => {
    console.log("server started");
});
