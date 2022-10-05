const crypto = require("crypto");

/**
 *
 * @param {*} key
 * @param {*} iv    密钥
 * @param {*} data  数据
 * @returns
 */

function encrypt(key, iv, data) {
  let dep = crypto.createCipheriv("aes-128-cbc", key, iv);

  return dep.update(data, "binary", "hex") + dep.final("hex");
}

function decrypt(key, iv, crypted) {
  crypted = Buffer.from(crypted, "hex").toString("binary");

  let dep = crypto.createDecipheriv("aes-128-cbc", key, iv);

  return dep.update(crypted, "binary", "utf8") + dep.final("utf8");
}

//aes-128-cbc   16 * 8 = 128   16字节
let key = "0123456789abcdef";
let iv = "0123456789zxcvbn";
let data = "mydata";
let cryted = encrypt(key, iv, data);
console.log("加密结果---", cryted);

let decryptd = decrypt(key, iv, cryted);
console.log("解密结果---", decryptd);
