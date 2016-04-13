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
            //the shell template holds the nav and body template
            //<shell>
            //  <nav></nav>
            //  <body></body>
            //</shell>
            //
            template: shell,
            controller: 'HomeCtrl as Home'
          },
          'nav@home': {
            template: nav
          },
          //the body template is swapped out by UI router
          //and replaced with the requested content
          //e.g. blog post, resume
          //check out the post module to see it in action
          'body@home': {
            template: body
          }
        }
      })
      .state('home.main', {
        //home is setup to be abstract, and i think abstract
        //states cannot be directly navigated to.
        //making home.main a child of home view and
        //setting the url to '/' makes it so the home state
        //is always active when the user is navigating the app,
        //as every state in the app is a child to home. 
        //with this setup and with controllerAs, 
        //you can access the nav and home controller
        //from any templates that get rendered in 
        //the body view, which is basically the whole app.
        //the home ctrl is a great place to setup current user 
        //or auth stuff as you can make it almost globally
        //available to the rest of the app. 
        url: '/',
        template: home
      });
  })
  .factory('Analysis', Analysis)
  .filter('sentiment', sentiment)
  .controller('HomeCtrl', HomeCtrl);

export default homeModule;

