const kullanicilar = require("../data/kullaniciDB.json");
const { v4: uuidv4 } = require("uuid");
function findAll() {
  return new Promise((resolve, reject) => {
    resolve(kullanicilar);
  });
}
function findByID(id) {
  return new Promise((resolve, reject) => {
    const kullanici = kullanicilar.find((k) => k.id === id);
    resolve(kullanici);
  });
}

function create(kullanici) {
  return new Promise((resolve, reject) => {
    const yeni = { id: uuidv4(), ...kullanici };
    kullanicilar.push(yeni);
    resolve(kullanici);
  });
}
module.exports = {
  findAll,
  findByID,
  create,
};
