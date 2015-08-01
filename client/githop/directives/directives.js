/**
 *
 * Created by githop on 8/1/15.
 */

import angular from 'angular';

import scrollNav from './scrollNav.directive';
import myHeader from './myHeader.directive';
import myPara from './myPara/myPara.directive';
import myRankCard from './myRankCard/rankcard.directive';

let directivesModule = angular.module('githop.directives', [])
  .directive('scrollNav', scrollNav)
  .directive('myPara', myHeader)
  .directive('myPara', myPara)
  .directive('myRankCard', myRankCard);

export default directivesModule;
