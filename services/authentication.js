const JWT = require("jsonwebtoken");
const secreate = "D2@34deepak@20";

function createTokenForUser(user) {
  const payload = {
    id: user._id,
    email: user.email,
    profileImageURL: user.profileImageURL,
    role: user.role,
    name: user.username,
  }
  const token = JWT.sign(payload, secreate);
return token;
}


function validationToken(token) {
  const payload = JWT.verify(token, secreate);
  return payload;
}



module.exports = {
  createTokenForUser,
  validationToken,
};
