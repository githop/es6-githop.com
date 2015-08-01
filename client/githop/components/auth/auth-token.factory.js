/**
 *
 * Created by githop on 7/31/15.
 */

/*@ngInject*/
let AuthToken = function($window) {
  var key = 'auth-token';
  var store = $window.localStorage;
  var AuthToken = {};

  AuthToken.setToken = function(token) {
    if (token) {
      store.setItem(key, token);
    } else {
      store.removeItem(key);
    }
  };

  AuthToken.getToken = function() {
    return store.getItem(key);
  };

  return AuthToken;

};

export default AuthToken;