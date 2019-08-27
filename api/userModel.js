const db = require('../database/dbConfig');
const mappers = require('./mappers');

module.exports = {
  get,
  getUsersArticles
}
function get(id) {
    let query = db("users as p");
  
    if (id) {
      query.where("p.id", id).first();
  
      const promises = [query, this.getUserArticles(id)]; 
  
      return Promise.all(promises).then(function(results) {
        let [user, articles] = results;
  
        if (user) {
          user.articles = articles;
  
          return mappers.userToBody(user);
        } else {
          return null;
        }
      });
    }
  
    return query.then(users => {
      return users.map(user => mappers.userToBody(user));
    });
  }
  function getUsersArticles(userId) {
    return db('board')
      .where('user_id', userId)
      .then(articles => articles.map(article => mappers.articleToBody(article)));
  }