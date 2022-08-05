const Kullanici = require("../models/kullaniciModel");
const { getPostData } = require("../utils");

async function getKullanicilar(req, res) {
  try {
    const kullaicilar = await Kullanici.findAll();

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(kullaicilar));
  } catch (error) {
    console.log(error);
  }
}
async function getKullanici(req, res, id) {
  try {
    const kullanici = await Kullanici.findByID(id);

    if (!kullanici) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Kullanıcı bulunamadı" }));
    } else {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(kullanici));
    }
  } catch (error) {
    console.log(error);
  }
}
async function createKullanici(req, res) {
  try {
    const body = await getPostData(req);
    const { isim, email } = JSON.parse(body);
    const kullanici = {
      isim,
      email,
    };
    const yeniKullanici = await Kullanici.create(kullanici);
    res.writeHead(201, { "Content-Type": "application/json" });
    return res.end(JSON.stringify(yeniKullanici));
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getKullanicilar,
  getKullanici,
  createKullanici,
};
