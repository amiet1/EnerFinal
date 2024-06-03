/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
//
 */

// item_name,
// price,
// image,

exports.up = function (knex) {
  return knex.schema
    .createTable('users', function (table) {
      table.increments('id').primary().unsigned();
      table.string('first_name').notNullable();
      table.string('last_name').notNullable();
      table.string('phone_number').notNullable();
      table.string('password').notNullable();
      table.string('email').notNullable();
      table.string('address').notNullable();
    })

    .createTable('cart', function (table) {
      table.increments('id').primary();
      table.string('items');
      table.integer('user_id').notNullable();
      table.foreign('user_id').references('id').inTable('users');
    })

    .createTable('items', function (table) {
      table.increments('id').primary();
      table.string('item_name').notNullable();
      table.integer('price').notNullable();
      table.string('image').notNullable();
      table.string('description').notNullable();
    });
};
exports.down = function (knex) {
  return knex.schema.dropTableIfExists('cart').dropTableIfExists('users').dropTable('items');
};
