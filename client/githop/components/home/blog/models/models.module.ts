/**
 *
 * Created by githop on 8/1/15.
 */
import 'angular';
import 'angular-ui-router';
import Article from './article.model';
import Header from './header.model';
import Para from './para.model';
import Img from './img.model';

let modelsModule = angular.module('githop.models', [
  'ui.router'
])
  .factory('Article', Article)
  .factory('Header', Header)
  .factory('Para', Para)
  .factory('Img', Img);

export default modelsModule;
