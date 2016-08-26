/**
 *
 * Created by githop on 8/1/15.
 */

import angular from 'angular';

import scrollNav from './scrollNav.directive';
import myHeader from './myHeader.directive';
import myPara from './myPara/myPara.directive';
import myRankCard from './myRankCard/rankcard.directive';
import myImg from './myImg.directive';

let directivesModule = angular.module('githop.directives', [])
  .directive('scrollNav', scrollNav)
  .directive('myHeader', myHeader)
  .directive('myPara', myPara)
  .component('myRankCard', myRankCard)
  .directive('myImg', myImg);

export default directivesModule;
