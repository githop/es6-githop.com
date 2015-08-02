/**
 * Created by githop on 8/1/15.
 */
import template from './myPara.tmpl.html!text';

let myPara = function() {

  var _paraCtrl = function(User) {
    'ngInject';
    var c = this;

    c.adminShow = function() {
      if (User.currentUser()) {
        c.canEdit = true;
      }
    };
    c.adminHide = function() {
      c.canEdit = false;
    };
  };

  return {
    template,
    restrict: 'A',
    scope: {
      header: '=',
      limit: '@',
      start: '@'
    },
    controller: _paraCtrl,
    controllerAs: 'c',
    bindToController: true
  };
};

export default myPara;