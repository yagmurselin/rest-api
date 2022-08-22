var Kullanici = require("../models/kullaniciModel"); //kullaniciModel'den fonksiyonları kulanabilmel için import  ediyoruz.
const { getPostData } = require("../utils");

async function getKullanicilar(req, res) {
  try {
    const kullanicilar = await Kullanici.findAll();

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(kullanicilar));
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
function check(id) {
  if ((id = getElementByid("kullanici").innerHTML = kullanici)) {
    return console.log("Kullanıcı zaten var");
  }
}

async function createKullanici(req, res) {
  try {
    const body = await getPostData(req); //kullanıcıyı oluşturmak için gerekli olan bilgileri body değişkenine atıyoruz.
    const { isim, email, id } = JSON.parse(body);
    const kullanici = {
      isim,
      email,
      id, //kullanıcıyı oluşturmak için gerekli olan bilgileri kullanici değişkenine atıyoruz.
    };
    const yeniKullanici = await Kullanici.create(kullanici);
    res.writeHead(201, { "Content-Type": "application/json" });
    return res.end(JSON.stringify(yeniKullanici));
    //kullanıcıyı oluşturduk ve 201 hatası döndürdük.
  } catch (check) {
    console.log(check);
  }
}

async function updateKullanici(req, res, id) {
  try {
    const kullanici = await Kullanici.findByID(id);

    if (!kullanici) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Kullanıcı bulunamadı" }));
    } else {
      const body = await getPostData(req);
      const { isim, email } = JSON.parse(body);

      const kullaniciVerisi = {
        isim: isim || kullanici.isim,
        email: email || kullanici.email,
      };
      const updateKullanici = await Kullanici.update(id, kullaniciVerisi);
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(updateKullanici));
    }
  } catch (error) {
    console.log(error);
  }
}

async function deleteKullanici(res, id) {
  try {
    const kullanici = await Kullanici.findByID(id); //silebilmek için kullanıcıyı id key'i ile bulmayı gerçekleştiriyoruz.

    if (!kullanici) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Kullanıcı bulunamadı" })); //kullanıcı bulunamadıysa 404 hatası döndürüyoruz.
    } else {
      await Kullanici.remove(id);
      res.writeHead(200, { "Content-Type": "application/json" }); //kullanıcıyı sildikten sonra 200 hatası döndürüyoruz.
      res.end(JSON.stringify({ mesaj: `Kullanici id=${id} silindi` }));
    }
  } catch (error) {
    console.log(error); //hata varsa console'a yazdırıyoruz.
  }
}

module.exports = {
  getKullanicilar,
  getKullanici,
  createKullanici,
  updateKullanici,
  deleteKullanici, //ürettiğimiz fonksiyonları exportluyoruz ki kullanabilelim.
  check,
};
