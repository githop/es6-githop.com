/**
 *
 * Created by githop on 8/2/15.
 */

Updates.$inject = ['$http', '$q', '$mdToast', 'appcache'];
export default function Updates($http, $q, $mdToast, appcache) {
  let updates = {};

  var _githubApi = 'https://api.github.com/repos/githop/es6-githop.com/commits?page=1&per_page=1';
  var _latestCommitMessage;
  var _author;
  var _date;
  var _url;
  updates.check = check;

  var _getLatestCommit = function() {
    var dfd = $q.defer();
    $http.get(_githubApi).then(function(resp) {
      _latestCommitMessage = resp.data[0].commit.message;
      _author = resp.data[0].commit.author;
      _date   = _author.date;
      _url    = resp.data[0].html_url;
      dfd.resolve(
        {
          message: _latestCommitMessage,
          author: _author.name,
          date: _date,
          url: _url
        }
      );
    });
    return dfd.promise;
  };

  var _installUpdates = function() {
    return window.location.reload();
  };

  var _updatesCtrl = function() {
    var u = this;
    u.install = _installUpdates;
  };

  var _toastCtrl = function($mdDialog, data) {
    var c = this;

    c.changeLog = function() {
      let updates = {
        templateUrl: 'updatesDialog.tmpl.html',
        controller: [_updatesCtrl],
        controllerAs: 'u',
        locals: {data: data},
        bindToController: true
      };
      $mdDialog.show(updates);
    };

    c.install = _installUpdates;
  };

  function check() {
    appcache.checkUpdate().then(function() {
      _getLatestCommit().then(function(data) {
        var toast = {
          templateUrl: 'updateToast.tmpl.html',
          controller: ['$mdDialog', 'data', _toastCtrl],
          controllerAs: 'c',
          bindToContoller: true,
          locals: {data: data},
          hideDelay: false
        };
        $mdToast.show(toast);
      });
    });
  }
  return updates;

}
