/**
 * Created by githop on 7/31/15.
 */

import 'angular';
import 'angular-ui-router';
import './resume.scss';
import 'angular-scroll';
import 'd3';
// import 'ng-donut';
import * as template from './resume.tmpl.html';
import ResumeCtrl from './resume.controller';
import TooltipDirective from './tooltip.directive';

let resumeModule = angular.module('githop.resume', [
  'ui.router',
  // 'ngDonut',
  'duScroll'
])
  .config(($stateProvider) => {
    $stateProvider
    .state('home.resume', {
      url: '/resume',
      template: template,
      controller: 'ResumeCtrl as Res'
    });
  })
  .controller('ResumeCtrl', ResumeCtrl)
  .directive('tooltip', TooltipDirective);

export default resumeModule;
