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

    tbl.string("board", 255).notNullable();
    tbl.string("title", 255).notNullable();
    tbl.string("authors", 255).notNullable();
    tbl.string("journal", 255);
    tbl.string("abstract", 255).notNullable();
    tbl.string("articleId", 255).notNullable();
    tbl.string("comments", 255).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("board");
};
