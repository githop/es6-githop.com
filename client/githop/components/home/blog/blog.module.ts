/**
 *
 * Created by githop on 8/1/15.
 */

import 'angular';
import 'angular-ui-router';
import * as template from './blog.tmpl.html';
import './posts/post.module';
import './models/models.module';
import BlogCtrl from './blog.controller';
import Resources from './resources.srv';
import Crud from './crud.srv';


let blogModule = angular.module('githop.blog', [
  'ui.router',
  'githop.models',
  'githop.post'
])
  .config(['$stateProvider', ($stateProvider) => {
    $stateProvider
      .state('home.blog', {
        url: '/blog',
        template,
        controller: 'BlogCtrl',
        controllerAs: 'Blog'
      });
  }])
  .factory('Resources', Resources)
  .factory('Crud', Crud)
  .controller('BlogCtrl', BlogCtrl);

export default blogModule;
