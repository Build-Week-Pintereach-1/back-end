module.exports = {
    intToBoolean
  }
  
  function intToBoolean(int) {
    return int === 1 ? true : false;
  }
  function articleToBody(user) {
      const result = {
        ...user,
        completed: intToBoolean(user.completed)
      };
    
      if (user.articles) {
        result.articles = user.articles.map(article => ({
          ...article,
          completed: intToBoolean(article.completed)
        }));
      }
    
      return result;
    }