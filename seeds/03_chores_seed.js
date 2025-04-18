/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

exports.seed = async function(knex) {
  await knex('chores').del()
  await knex('chores').insert([
    {chore_name: 'dishes',chore_frequency:'daily',completed:false, responsible_party:5},
    {chore_name: 'make bed',chore_frequency:'daily',completed:false, responsible_party:3},
    {chore_name: 'make bed',chore_frequency:'daily',completed:false, responsible_party:4},
    {chore_name: 'morning teeth',chore_frequency:'daily',completed:false, responsible_party:3},
    {chore_name: 'morning teeth',chore_frequency:'daily',completed:false, responsible_party:4},
    {chore_name: 'dog doo',chore_frequency:'weekly',completed:false, responsible_party:5}
  ]);
};
