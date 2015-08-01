/**
 * Created by githop on 7/31/15.
 */

import angular from 'angular';
import 'angular-ui-router';
import './resume.css!';
import 'd3';
import 'ng-donut';
import template from './resume.tmpl.html!text';
import ResumeCtrl from './resume.controller';
import TooltipDirective from './tooltip.directive';

let resumeModule = angular.module('githop.resume', [
  'ui.router',
  'ngDonut'
])
  .config(($stateProvider) => {
    $stateProvider
    .state('home.resume', {
      url: '/resume',
      template: template,
      controller: 'ResumeCtrl as Res'
    })
  })
  .controller('ResumeCtrl', ResumeCtrl)
  .directive('tooltip', TooltipDirective);

export default resumeModule;