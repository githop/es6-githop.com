/**
 *
 * Created by githop on 7/30/15.
 */
import 'angular';
import './home/home.module';
import './auth/auth.module';

let componentModule = angular.module('githop.components', [
  'githop.home',
  'githop.auth'
]);

export default componentModule;