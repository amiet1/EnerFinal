//*CRUD
const knex = require("../db");

//make into a class
//authenication is stored in this model, but make a seperate controller 

async function newUser(
  first_name,
  last_name,
  phone_number,
  password,
  email,
  address
) {
  await knex("users").insert({
    first_name,
    last_name,
    phone_number,
    password,
    email,
    address,
  });
}

//change to knex
async function getUsers() {
  const { rows } = await knex.raw(`
        SELECT * FROM users;
        `);
  return rows;
}

async function getUserById(id) {
  const { rows } = await knex.raw(
    `
        SELECT * FROM users
        WHERE id=?
        `,
    [id]
  );
  return rows[0];
}

async function getUserByEmail(email) {
  const { rows } = await knex.raw(
    `
        SELECT * FROM users
        WHERE email=?
        `,
    [email]
  );
  return rows[0];
}



//returning * gives back the most recent users updated info
async function updateUser(
  id,
  first_name,
  last_name,
  phone_number,
  password,
  email,
  address
) {

  await knex("users")
    .where({ id })
    .update({ first_name, last_name, phone_number, password, email, address });
}


async function destroyUser(id) {
  await knex('users')
  .where({ id })
  .del()
}


async function addItemToCart(
 item_name,
 price,
 image,
) {
  await knex("users").insert({
 item_name,
 price,
 image,
  });
}

async function removeItemFromCart(id){
  await knex('users').where({id}).del()
}

module.exports = {
  newUser,
  getUsers,
  getUserById,
  updateUser,
  destroyUser,
  addItemToCart,
  removeItemFromCart,
  getUserByEmail
};
