/**
 *
 * Created by githop on 8/1/15.
 */

import angular from 'angular';
import 'angular-ui-router';
import './blog.css!';
import template from './blog.tmpl.html!text';
import Posts from './posts/posts.module';
import Models from './models/models.module';
import BlogCtrl from './blog.controller';
import Resources from './resources.srv';

let blogModule = angular.module('githop.blog', [
  'ui.router',
  Models.name
  //Posts.name
])
  .config(($stateProvider) => {
    $stateProvider
      .state('home.blog', {
        url: '/blog',
        template: template,
        controller: 'BlogCtrl',
        controllerAs: 'Blog'
      });
  })
  .factory('Resources', Resources)
  .controller('BlogCtrl', BlogCtrl);

export default blogModule;
