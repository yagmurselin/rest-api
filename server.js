const http = require("http");
const {
  getKullanicilar,
  getKullanici,
  createKullanici,
  updateKullanici,
  deleteKullanici,
  check, //kullaniciController.js dosyasındaki fonksiyonları kullanabilmek için importluyoruz.
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
    //kullanıcı oluşturmak için gerekli olan url ve methodu kontrol ediyoruz.
    createKullanici(req, res);
  } else if (
    req.url.match(/\/api\/kullanici\/([0-9]+)/) &&
    req.method === "PUT" //kullanıcı güncellemek için gerekli olan url ve methodu kontrol ediyoruz.
  ) {
    const id = req.url.split("/")[3];
    updateKullanici(req, res, id);
  } else if (
    req.url.match(/\/api\/kullanici\/([0-9]+)/) &&
    req.method === "DELETE" //kullanıcı silmek için gerekli olan url ve methodu kontrol ediyoruz.
  ) {
    const id = req.url.split("/")[3];
    deleteKullanici(req, res, id);
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Yönlendirme geçersiz" }));
  }
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`server ${PORT} port no ile çalışıyor`)); //server.js dosyasını çalıştırıp localhost:3000/api/kullanicilar adresine gidip kullanıcıları görebiliriz.
