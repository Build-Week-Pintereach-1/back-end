exports.up = function(knex, Promise) {
  return knex.schema.createTable("board", tbl => {
    tbl.increments();
    tbl
      .integer("user_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    tbl.string("board", 2000).notNullable();
    tbl.string("title", 2000).notNullable();
    tbl.string("authors", 2000).notNullable();
    tbl.string("journal", 2000);
    tbl.string("abstract",9999).notNullable();
    tbl.string("articleId", 2000).notNullable();
    tbl.string("comments",2000).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("board");
};
