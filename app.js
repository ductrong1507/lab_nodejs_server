const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Test create server</title></head>");
    res.write("<body>");

    res.write("<form action='/create-user' method='POST'>");

    res.write("<input type='text' name='userName' /><button>Send</button>");

    res.write("</form>");

    res.write("</body>");

    res.write("</html>");

    return res.end();
  } else if (url === "/users") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Test create server</title></head>");
    res.write("<body>");

    res.write("<ul><li>User 1</li><li>User 1</li></ul>");

    res.write("</body>");

    res.write("</html>");

    return res.end();
  } else if (url === "/create-user") {
    const body = [];
    let parsedBody = "test=name";
    req.on("data", (chunk) => {
      body.push(chunk);
    });

    req.on("end", () => {
      parsedBody = Buffer.concat(body).toString();
      console.log("parsedBody", parsedBody.split("=")[1]);

      res.statusCode = 302;
      res.setHeader("Content-Type", "text/html");

      res.write("<html>");
      res.write("<head><title>Test create server</title></head>");
      res.write("<body>");

      res.write(`<p>${parsedBody.split("=")[1]}</p>`);

      res.write("</body>");

      res.write("</html>");
      res.end();
    });
  }
});

server.listen(5000);
