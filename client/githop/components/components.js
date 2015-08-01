/**
 *
 * Created by githop on 7/30/15.
 */
import angular from 'angular';
import Home from './home/home.module';
import Auth from './auth/auth.module';

let componentModule = angular.module('githop.components', [
  Home.name,
  Auth.name
]);

export default componentModule;