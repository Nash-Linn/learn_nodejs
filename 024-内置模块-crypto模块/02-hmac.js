//hmac算法也是一种哈希算法，它可以利用MD5或者SHA1等哈希算法。
//不同的是，Hmac还需要一个密钥

const crypto = require("crypto");

const hash = crypto.createHmac("md5", "Nash");

hash.update("123456");

console.log('hash.digest("hex")', hash.digest("hex"));
