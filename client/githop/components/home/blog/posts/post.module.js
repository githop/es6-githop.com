/**
 *
 * Created by githop on 8/1/15.
 */
import angular from 'angular';
import 'angular-ui-router';
import PostCtrl from './post.controller';
import post1 from './post1.tmpl.html!text';
import post2 from './post2.tmpl.html!text';
import post3 from './post3.tmpl.html!text';
import post4 from './post4.tmpl.html!text';
import post5 from './post5.tmpl.html!text';
import post6 from './post6.tmpl.html!text';
import post7 from './post7.tmpl.html!text';
import post8 from './post8.tmpl.html!text';
import post9 from './post9.tmpl.html!text';

const templates = [post1, post2, post3, post4, post5, post6, post7, post8, post9];

let _templateProvider = function(id) {
  let index = id - 1;
  return templates[index];
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

