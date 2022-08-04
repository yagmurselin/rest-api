const http = require("http");
const {
  getKullanicilar,
  getKullanici,
  createKullanici,
} = require("./controller/kullaniciController");
const kullanicilar = require("./data/kullaniciDB.json");
const server = http.createServer((req, res) => {
  // res.statusCode = 200;
  // res.setHeader("Content-Type", "text/html");
  // res.write("<h1>Merhaba NodeJS</h1>");
  // res.end();

  // res.writeHead(200, { "Content-Type": "application/json" });
  // res.end(JSON.stringify(kullanicilar));
  if (req.url === "/api/kullanicilar" && req.method === "GET") {
    getKullanicilar(req, res);
  } else if (
    req.url.match(/\/api\/kullanici\/([0-9]+)/) &&
    req.method === "GET"
  ) {
    const id = req.url.split("/")[3];
    getKullanici(req, res, id);
  } else if (req.url === "/api/kullanici" && req.method === "POST") {
    createKullanici(req, res);
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Yönlendirme geçersiz" }));
  }
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`server ${PORT} port no ile çalışıyor`));
