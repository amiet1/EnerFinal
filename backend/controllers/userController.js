const {
  getUsers,
  getUserById,
  newUser,
  updateUser,
  destroyUser,
  addItemToCart,
  removeItemFromCart,
  getUserByEmail,
} = require("../models/users");
const jwt = require("jsonwebtoken"); //so i know when users are logged in
const bcrypt = require("bcrypt");
require("dotenv").config();

const getAllUsers = async (req, res) => {
  try {
    const result = await getUsers();
    res.json(result);
  } catch (error) {
    console.log(error)
    res.status(500).send();
  }
};

const getById = async (req, res) => {
  const id = req.get("id");
  try {
    const result = await getUserById(id);
    res.json(result);
  } catch (error) {
    console.log(error)
    res.status(500).send();
  }
};

const createUser = async (req, res) => {
  const { first_name, last_name, phone_number, password, email, address } =
    req.body;
  console.log(req.body);
  const hashPassword = await bcrypt.hash(password, 10);
  try {
    const result = await newUser(
      first_name,
      last_name,
      phone_number,
      hashPassword,
      email,
      address
    );
    const token = jwt.sign({ email }, process.env.AUTH_KEY);
    res.json({ result, token });
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await getUserByEmail(email);

    if (!user.id) {
      //if user exists
      return res.status(401).send("User Does Not Exist.");
    }
    const isValidPassword = await bcrypt.compare(password, user.password);

    if (isValidPassword) {
      const token = jwt.sign({ email: user.email }, process.env.AUTH_KEY);
      res.json({ user, token });
    }
  } catch (error) {
    console.log(error)
    res.status(500).send();
  }
};

// const logout = async (req,res) {
//   res.send({user,token}) = null;
// }

const updateUserById = async (req, res) => {
  const id = req.get("id");
  const { first_name, last_name, phone_number, password, email, address } =
    req.body;
  try {
    const result = await updateUser(
      id,
      first_name,
      last_name,
      phone_number,
      password,
      email,
      address
    );
    res.json(result);
  } catch (error) {
    console.log(error)
    res.status(500).send();
  }
};

const deleteUser = async (req, res) => {
  const id = req.get("id");
  try {
    const result = await destroyUser(id);
    res.json(result);
  } catch (error) {
    console.log(error)
    res.status(500).send();
  }
};

//addItemToCart
const addItem = async (req, res) => {
  const { items, cart_id } = req.body;
  try {
    const result = await addItemToCart(items, cart_id);
    res.json(result);
  } catch (error) {
    console.log(error)
    res.status(500).send();
  }
};

//removeItemFromCart
const removeItem = async (req, res) => {
  const id = req.get("id");
  try {
    const result = await removeItemFromCart(id);
    res.json(result);
  } catch (error) {
    console.log(error)
    res.status(500).send();
  }
};

module.exports = {
  getAllUsers,
  getById,
  createUser,
  updateUserById,
  deleteUser,
  addItem,
  removeItem,
  login,
};
