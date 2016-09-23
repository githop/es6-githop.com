/**
 * Created by githop on 7/31/15.
 */

import 'angular';
import 'angular-ui-router';
import 'angular-scroll';
import '../../../../assets/scripts/d3.min';
import '../../../../assets/scripts/nv.d3.min';
import * as template from './resume.tmpl.html';
import ResumeCtrl from './resume.controller';
import TooltipDirective from './tooltip.directive';

let resumeModule = angular.module('githop.resume', [
  'ui.router',
  'nvd3',
  'duScroll'
])
  .config(['$stateProvider', ($stateProvider) => {
    $stateProvider
    .state('home.resume', {
      url: '/resume',
      template: template,
      controller: 'ResumeCtrl as Res'
    });
  }])
  .controller('ResumeCtrl', ResumeCtrl)
  .directive('tooltip', TooltipDirective);

export default resumeModule;
