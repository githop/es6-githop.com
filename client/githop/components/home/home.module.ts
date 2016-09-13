/**
 *
 * Created by githop on 7/31/15.
 */
import 'angular';
import 'angular-ui-router';
import shell from './layout/shell.tmpl.html';
import nav from './layout/nav.tmpl.html';
import body from './layout/body.tmpl.html';
import home from './home.tmpl.html';
import './blog/blog.module';
import './resume/resume.module';
import HomeCtrl from './home.controller';
import Analysis from './analysis.srv';
import sentiment from './sentiment.filter';

let homeModule = angular.module('githop.home', [
  'ui.router',
  'githop.blog',
  'githop.resume'
])
  .config(($stateProvider) => {
    $stateProvider
      .state('home', {
        abstract: true,
        views: {
          '@': {
            template: shell,
            controller: 'HomeCtrl as Home'
          },
          'nav@home': {
            template: nav
          },
          'body@home': {
            template: body
          }
        }
      })
      .state('home.main', {
        url: '/',
        template: home
      });
  })
  .factory('Analysis', Analysis)
  .filter('sentiment', sentiment)
  .controller('HomeCtrl', HomeCtrl);

export default homeModule;

