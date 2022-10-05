const crypto = require("crypto");

//md5

// const hash = crypto.createHash("md5");

// hash.update("hello world");

// console.log('hash.digest("hex")', hash.digest("hex"));

//sha1
const hash = crypto.createHash("sha1");

hash.update("hello world");

console.log('hash.digest("hex")', hash.digest("hex"));
