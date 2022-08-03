const http = require("http");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.write("<h1>Merhaba NodeJS</h1>");
  res.end();
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`server ${PORT} port no ile çalışıyor`));
