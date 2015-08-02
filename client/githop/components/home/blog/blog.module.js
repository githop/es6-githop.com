/**
 *
 * Created by githop on 8/1/15.
 */

import angular from 'angular';
import 'angular-ui-router';
import './blog.css!';
import template from './blog.tmpl.html!text';
import Post from './posts/post.module';
import Models from './models/models.module';
import BlogCtrl from './blog.controller';
import Resources from './resources.srv';
import Crud from './crud.srv';


let blogModule = angular.module('githop.blog', [
  'ui.router',
  Models.name,
  Post.name
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
  .factory('Crud', Crud)
  .controller('BlogCtrl', BlogCtrl);

export default blogModule;
