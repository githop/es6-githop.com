/**
 *
 * Created by githop on 7/31/15.
 */
AuthToken.$inject = ['$window'];

interface AuthToken {
  setToken(authToken:string);
  getToken();
}

export default function AuthToken($window): AuthToken {
  var _key = 'auth-token';
  var _store = $window.localStorage;

  return {setToken, getToken};

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
}

