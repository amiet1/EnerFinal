const express = require('express');
const userRouter = express.Router();
const {
    getAllUsers,
    getById,
    createUser,
    updateUserById,
    deleteUser,
    addItem,
    removeItem
  } = require("../controllers/userController");

  
const auth = require('../utils/auth');

userRouter.get("/get-users", getAllUsers);
userRouter.get("/get-user-by-id", getById);
userRouter.post("/create-user", createUser);
userRouter.patch("/update-user", auth, updateUserById);
userRouter.delete("/delete-user",auth, deleteUser);
userRouter.post('/add-item', auth, addItem);
userRouter.delete('/remove-item',auth, removeItem); //auth used to prove/check that you're the allowed to edit your acc


module.exports = userRouter;