/**
 *
 * Created by githop on 7/31/15.
 */

/*@ngInject*/
let UserFactory = function($http, $q, $window, $mdDialog, $mdToast, AuthToken, API_URL) {
  var User = {};

  var _user = undefined;

  //public methods binding
  User.login = login;
  User.logout = logout;
  User.currentUser = currentUser;

  //private methods
  var _parseJwt = function(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse($window.atob(base64));
  };

  var _setCurrentUser = function(token) {
    _user = _parseJwt(token);
    return _user;
  };

  var _init = function() {
    if ($window.localStorage['auth-token']) {
      return _setCurrentUser($window.localStorage.getItem('auth-token'));
    }
  };

  function _login(email, password) {
    var dfd = $q.defer();
    $http.post(API_URL + '/auth/login', {
      data: {
        email: email,
        password: password
      }
    }).then(function(resp) {
      AuthToken.setToken(resp.data.token);
      var user = _setCurrentUser(resp.data.token);
      dfd.resolve(user);
    }, function error(e) {
      dfd.reject(e);
    });

    return dfd.promise;
  }

  var _dialogController = function($mdDialog, $mdToast) {
    var dialog = this;
    dialog.test = 'hello world';

    dialog.login = function(email, password) {
      _login(email, password).then(function(user) {
        var toast = $mdToast.simple()
          .content('Welcome Back ' + user.username + '!');
        $mdToast.show(toast);
        $mdDialog.hide(user);
      }, function(e) {
        var error = $mdToast.simple().content('Whoops! ' + e.data.error);
        $mdToast.show(error);
      });
    };
    dialog.close = function() {
      $mdDialog.hide();
    };
  };

  _init();

  function login(ev) {
    return $mdDialog.show({
      controller: /*ngInject*/ _dialogController,
      controllerAs: 'dialog',
      templateUrl: 'dialog1.tmpl.html',
      parent: angular.element(document.body),
      targetEv: ev
    });
  }

  function logout() {
    AuthToken.setToken();
    $mdToast.show($mdToast.simple().content('Logged out'));
    return _user = undefined;
  }

  function currentUser() {
    return _user;
  }

  return User;
};

export default UserFactory;
