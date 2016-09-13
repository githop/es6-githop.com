/**
 * Created by githop on 7/31/15.
 */
import 'angular';
import AuthInterceptor from './auth.interceptor';
import AuthToken from './auth-token.factory';
import User from './user.srv';

let authModule = angular.module('githop.auth', [])
  .factory('AuthToken', AuthToken)
  .factory('AuthInterceptor', AuthInterceptor)
  .factory('User', User);

export default authModule;
