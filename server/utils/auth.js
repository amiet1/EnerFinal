const jwt = require("jsonwebtoken");
const {getUserByEmail} = require("../Models/users");

 
const authenticate = async (req, res, next) => {
  const token = req.headers.get('Authorization'); //grabbing token(cookie) and checking it 

  if (!token) return res.status(401).send("Token not found, please login.");

  const { email } = await jwt.verify(token, process.env.AUTH_KEY,(err, decoded) => {

      if (err) throw Error("Failed to authenticate token");
      return decoded;
    }
  );

  const user = await getUserByEmail(email);

  if (!user.id) return res.status(404).send("No user found.");
  next();
};

module.exports = authenticate;