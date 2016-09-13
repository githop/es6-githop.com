/**
 *
 * Created by githop on 8/1/15.
 */
import 'angular';
import 'angular-ui-router';
import PostCtrl from './post.controller';
import * as post1 from './post1.tmpl.html';
import * as post2 from './post2.tmpl.html';
import * as post3 from './post3.tmpl.html';
import * as post4 from './post4.tmpl.html';
import * as post5 from './post5.tmpl.html';
import * as post6 from './post6.tmpl.html';
import * as post7 from './post7.tmpl.html';
import * as post8 from './post8.tmpl.html';
import * as post9 from './post9.tmpl.html';

const templates = {post1, post2, post3, post4, post5, post6, post7, post8, post9};

let _templateProvider = function(i) {
  return templates[`post${i}`];
};

let postModule = angular.module('githop.post', [
  'ui.router'
])
  .config(($stateProvider) => {
    $stateProvider
      .state('home.blog.post', {
        url: '/posts/{postId}',
        views: {
          'body@home': {
            templateProvider: function($stateParams) {
              return _templateProvider($stateParams.postId);
            },
            controller: 'PostCtrl as Post'
          }
        }
      });
  })
  .controller('PostCtrl', PostCtrl);

export default postModule;

