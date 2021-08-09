const fs = require("fs");

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === "/") {
        res.write("<html>");
        res.write("<head><title>Enter message</title></head>");
        res.write("<body><form action='/message' method='POST'><input type='text' name='myText'><button type='submit'>Send</button></form></body>");
        res.write("</html>");
        return res.end();
    }

    if (url === "/message" && method === "POST") {
        const chunks = [];
        req.on("data", (chunk) => {
            chunks.push(chunk);
        });
        return req.on("end", () => {
            const body = Buffer.concat(chunks).toString();
            const message = body.split("=")[1];
            fs.writeFile("messages.txt", message, (err) => {
                res.statusCode = 302;
                res.setHeader("Location", "/");
                return res.end();
            });
        });
    }

    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My First Page</title></head>");
    res.write("<body><h1>Hello from my Node.js Server</h1></body>");
    res.write("</html>");
    res.end();
};

// # Exporting Objects

// single export 
// module.exports = requestHandler;

// multiple exports in an object - syntax 1
// module.exports = {
//     handler: requestHandler,
//     someText: "Some hard coded text"
// };

// multiple exports in an object - syntax 2
// module.exports.handler = requestHandler;
// module.exports.someText = "Sone hard coded text";

// multiple exports in an object - syntax 3
exports.handler = requestHandler;
exports.someText = "Sone hard coded text";