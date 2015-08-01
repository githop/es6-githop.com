/**
 * Created by githop on 8/1/15.
 */

let myHeader = function() {

  var _ctrl =function(User) {
    'ngInject';
    var c = this;
    c.canEdit = function() {
      if (User.currentUser()) {
        c.header.edit();
      }
    }
  };

  return {
    restrict: 'EA',
    template: '<h3 ng-click="c.canEdit()">{{c.header.attributes.text}}</h3>',
    scope: {
      header: '='
    },
    controller: _ctrl,
    controllerAs: 'c',
    bindToController: true
  };
};

export default myHeader;