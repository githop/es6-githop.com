/**
 *
 * Created by githop on 7/31/15.
 */
import angular from 'angular';
import 'angular-ui-router';
import shell from './layout/shell.tmpl.html!text';
import nav from './layout/nav.tmpl.html!text';
import body from './layout/body.tmpl.html!text';
import home from './home.tmpl.html!text';
import Blog from './blog/blog.module';
import HomeCtrl from './home.controller';
import Resume from './resume/resume.module';
import Analysis from './analysis.srv';
import sentiment from './sentiment.filter';

let homeModule = angular.module('githop.home', [
  'ui.router',
  Blog.name,
  Resume.name
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

