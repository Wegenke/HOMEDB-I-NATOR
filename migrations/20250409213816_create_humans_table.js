/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('humans', table => {
    table.increments();
    table.enu('type',null,{useNative:true, existingType:true, enumName:'kid_parent'});
    table.string('name');
    table.string('nick_name');
    table.integer('rating');
    table.float('allowance_earned', 4,2);
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('humans');
};
