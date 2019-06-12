
exports.up = function(knex, Promise) {
return  knex.schema.createTable('cards', (table)=>{
    table.increments();
    table.string("description");
    table.integer('mana');
    table.integer('attack');
    table.integer('health');
    table.timestamps(true,true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("cards");
};
