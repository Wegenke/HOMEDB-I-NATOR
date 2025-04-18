/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  await knex('animals').insert([
    { name: 'Tank Williams', type: 'dog', age: 3 },
    { name: 'Bambi', type: 'chicken', age: 1 },
    { name: 'Red', type: 'chicken', age: 1 },
    { name: 'Hennifer Lawrence', type: 'chicken', age: 1 },
    { name: 'Dolly Parton', type: 'chicken', age: 1 },
    { name: 'Agitha', type: 'chicken', age: 1 },
    { name: 'Killer Croc', type: 'chicken', age: 1 }
  ]);
};
