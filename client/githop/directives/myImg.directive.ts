/**
 *
 * Created by githop on 8/5/15.
 */

let myImg = function() {
  return  {
    restrict: 'EA',
    template: '<div class="post-img"><img ng-src="{{imgs[index].attributes.href}}" alt="{{imgs[index].attributes.title}}"/></div>',
    scope: {
      imgs: '=',
      index: '@'
    }
  };
};

export default myImg;
