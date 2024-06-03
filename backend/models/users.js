//* CRUD
const knex = require('../db');

// make into a class
// authenication is stored in this model, but make a seperate controller

class User {
  static async newUser(
    first_name,
    last_name,
    phone_number,
    password,
    email,
    address,
  ) {
    await knex('users').insert({
      first_name,
      last_name,
      phone_number,
      password,
      email,
      address,
    });
  }

  // change to knex
  static async getUsers() {
    const { rows } = await knex.raw(`
          SELECT * FROM users;
          `);
    return rows;
  }

  static async getUserById(id) {
    const { rows } = await knex.raw(
      `
          SELECT * FROM users
          WHERE id=?
          `,
      [id],
    );
    return rows[0];
  }

  static async getUserByEmail(email) {
    const { rows } = await knex.raw(
      `
          SELECT * FROM users
          WHERE email=?
          `,
      [email],
    );
    return rows[0];
  }

  // returning * gives back the most recent users updated info
  static async updateUser(
    id,
    first_name,
    last_name,
    phone_number,
    password,
    email,
    address,
  ) {
    await knex('users')
      .where({ id })
      .update({ first_name, last_name, phone_number, password, email, address });
  }

  static async destroyUser(id) {
    await knex('users')
      .where({ id })
      .del();
  }

  static async addItemToCart(
    item_name,
    price,
    image,
  ) {
    await knex('users').insert({
      item_name,
      price,
      image,
    });
  }

  static async removeItemFromCart(id) {
    await knex('users').where({ id }).del();
  }
}

module.exports = User;
