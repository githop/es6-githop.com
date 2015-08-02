/**
 *
 * Created by githop on 7/31/15.
 */
let AuthInterceptor = function(AuthToken, API_URL) {
  'ngInject';

  return {
    request: addToken
  };

  function addToken(config) {
    var token = AuthToken.getToken(),
      isTemplate = config.url.substr(config.url.length - 5) === '.html',
      articlesResource = API_URL + '/articles',
      paragraphsResource = API_URL + '/articles',
      isProtectedResource = config.url.indexOf(articlesResource) > -1 || config.url.indexOf(paragraphsResource),
      //isGet = config.method === 'GET',
      isPost = config.method === 'POST',
      isPut = config.method === 'PUT',
      isDelete = config.method === 'DELETE',
      isPatch = config.method === 'PATCH';

    //only add token for crud methods on article resource
    if (isProtectedResource && !isTemplate) {
      if (isPost || isDelete || isPut || isPatch) {
        //console.log('gonna need that token!');
        if (token) {
          config.headers = config.headers || {};
          config.headers.Authorization = 'Bearer ' + token;
        }
      }
    }

    return config;
  }

};

export default AuthInterceptor;
