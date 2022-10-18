const jwt = require("jsonwebtoken");

const secret = "myKey";

const JWT = {
  generate(data, expires_time) {
    return jwt.sign(data, secret, {
      expiresIn: expires_time,
    });
  },

  verify(token) {
    try {
      return jwt.verify(token, secret);
    } catch {
      return false;
    }
  },
};

module.exports = JWT;
