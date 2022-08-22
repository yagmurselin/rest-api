const { errorMonitor } = require("events");
const fs = require("fs");

function dosyayaYaz(dosyaAd, icerik) {
  fs.writeFileSync(dosyaAd, JSON.stringify(icerik), "utf-8", (err) => {
    if (err);
    console.log(err);
  });
}

function getPostData(req) {
  return new Promise((resolve, reject) => {
    try {
      let body = "";
      req.on("data", (data) => {
        body += data.toString();
      });
      req.on("end", () => {
        resolve(body);
      });
    } catch (error) {
      reject(error);
    }
  });
}
module.exports = {
  dosyayaYaz,
  getPostData,
};
