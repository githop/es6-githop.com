/**
 *
 * Created by githop on 7/31/15.
 */
AuthToken.$inject = ['$window'];

export default function AuthToken($window) {
  var _key = 'auth-token';
  var _store = $window.localStorage;
  var AuthToken = {};

  AuthToken.setToken = setToken;
  AuthToken.getToken = getToken;

  function setToken(token) {
    if (token) {
      _store.setItem(_key, token);
    } else {
      _store.removeItem(_key);
    }
  }

  function getToken() {
    return _store.getItem(_key);
  }

  return AuthToken;
}

