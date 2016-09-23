/**
 *
 * Created by githop on 7/30/15.
 */

import 'angular';
import 'angular-ui-router';
import 'angular-material';
import 'angular-sanitize';
import '../assets/scripts/ng-appcache';
import './components/components';
import './directives/directives';
import GithopComponent from './githop.comp';
import Updates from './updates.srv';

let appModule = angular.module('githop', [
  'ui.router',
  'ngMaterial',
  'ngSanitize',
  'ng-appcache',
  'githop.components',
  'githop.directives',
])
  .value('duScrollOffset', 70)
  .constant('API_URL', 'http://githop.com')

  .config(['$urlRouterProvider', '$httpProvider', '$compileProvider', 'API_URL',
    ($urlRouterProvider, $httpProvider, $compileProvider, API_URL) => {
    $httpProvider.interceptors.push('AuthInterceptor');
    if (API_URL === 'http://githop.com') {
      $compileProvider.debugInfoEnabled(false);
    }

    $urlRouterProvider.otherwise('/');
  }])
  .factory('Updates', Updates)
  .directive('githop', GithopComponent);

angular.element(document).ready(()=> {
  angular.bootstrap(document, [appModule.name]), {
    strictDi: true
  }
});

export default appModule;
