/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('cart').del();
  await knex('users').del();

  await knex.raw('ALTER SEQUENCE cart_id_seq RESTART WITH 1');
  await knex.raw('ALTER SEQUENCE users_id_seq RESTART WITH 1');

  await knex('users').insert([

    {
      first_name: 'Shemar',
      last_name: 'gordon',
      phone_number: 8888888888,
      password: '12345',
      email: 'enail.@gamil.com',
      address: 'homesweethome',
    },
    {
      first_name: 'Amanda',
      last_name: 'Smith',
      phone_number: 5551234567,
      password: 'pass123',
      email: 'amanda.smith@example.com',
      address: '123 Main St',
    },
    {
      first_name: 'John',
      last_name: 'Doe',
      phone_number: 5559876543,
      password: 'doe456',
      email: 'john.doe@example.com',
      address: '456 Elm St',
    },
    {
      first_name: 'Emily',
      last_name: 'Johnson',
      phone_number: '5555555555',
      password: 'emily789',
      email: 'emily.johnson@example.com',
      address: '789 Oak St',
    },
    {
      first_name: 'Emily',
      last_name: 'Johnson',
      phone_number: '5555555555',
      password: 'emily789',
      email: 'emily.johnson@example.com',
      address: '789 Oak St',
    },
  ]);

  // price,image,description
  await knex('items').insert([
    {
      item_name: 'fancy',
      price: 20,
      image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTI6-0SaJi4OvQQhSfpaMDh2wZQZ0PA5vIlvdLwX6Va7Frnm_W3T2K6LfHGfYHItSxDKZxPBC8avnZ2Idy9csYzuquFU_GHccIM9p1bgNVbUYmmqIj9Sh13eZL_g09-&usqp=CAc',
      description: 'sweatsuit',
    },
    {
      item_name: 'super',
      price: 25,
      image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTI6-0SaJi4OvQQhSfpaMDh2wZQZ0PA5vIlvdLwX6Va7Frnm_W3T2K6LfHGfYHItSxDKZxPBC8avnZ2Idy9csYzuquFU_GHccIM9p1bgNVbUYmmqIj9Sh13eZL_g09-&usqp=CAc',
      description: 'hoodie',
    },
  ]);

  await knex('cart').insert([
    {
      items: '[1,2]', // ids of items
      user_id: '1',
    },
    {
      items: '[1]',
      user_id: '2',
    },
  ]);
};
