/**
 * Created by githop on 6/1/15.
 */

import template from './tooltip.tmpl.html';

    let tooltipDirective = function() {
      return {
        template,
        restrict: 'EA',
        require: 'ngModel',
        scope: {
          model: '=ngModel'
        }
      };
    }

export default tooltipDirective;