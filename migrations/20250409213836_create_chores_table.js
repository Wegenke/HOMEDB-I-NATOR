/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('chores', table => {
    table.increments();
    table.string('chore_name');
    table.string('chore_frequency');
    table.boolean('completed');
    table.integer('responsible_party').references('humans.id');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.alterTable('chores', table =>{
    table.dropForeign('responsible_party')
  }).then(function(){
    return knex.schema.dropTable('chores')
  })
};
