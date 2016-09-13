/**
 * Created by githop on 8/1/15.
 */
import template from './myPara.tmpl.html';

export default function myPara() {
  var controller = function(User) {
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

  var scope = {
      header: '=',
      limit: '@',
      start: '@'
    };

  return {
    restrict: 'A',
    template,
    controller: ['User', controller],
    scope,
    controllerAs: 'c',
    bindToController: true
  };
};