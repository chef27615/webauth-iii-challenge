
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', tbl => {
      tbl.increments();
      
      tbl
      .string('name', 128)
      .notNullable()
      .unique()

      tbl
      .string('password', 256)
      .notNullable()

      tbl
      .string('department', 128)
      

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};
