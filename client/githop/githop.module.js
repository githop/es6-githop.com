/**
 *
 * Created by githop on 7/30/15.
 */
import angular from 'angular';
import 'angular-ui-router';
import 'angular-material';
import 'angular-material/angular-material.css!';
import 'angular-sanitize';
import Components from './components/components';
import Directives from './directives/directives';
import GithopComponent from './githop.comp';

let appModule = angular.module('githop', [
  'ui.router',
  'ngMaterial',
  'ngSanitize',
  Components.name,
  Directives.name
])
  .value('duScrollOffset', 70)
  .constant('API_URL', 'http://githop.com')

  .config(($urlRouterProvider, $httpProvider, $compileProvider, API_URL) => {
    $httpProvider.interceptors.push('AuthInterceptor');
    if (API_URL === 'http://githop.com') {
      $compileProvider.debugInfoEnabled(false);
    }

    $urlRouterProvider.otherwise('/');
  })
  .directive('githop', GithopComponent);

angular.element(document).ready(()=> {
  angular.bootstrap(document, [appModule.name]), {
    strictDi: true
  }
});

export default appModule;
