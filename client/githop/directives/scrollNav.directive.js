/**
 * Created by githop on 7/31/15.
 */
import $ from 'jquery';


let scrollNav = function($window, $$rAF, $mdConstant) {
  'ngInject';

  return {
    restrict: 'A',
    link: function(scope, elm, attr) {

      var navElm = angular.element('#my-nav');

      var body = angular.element('#res-col');
      var y = 0;
      var prevScrollTop = 0;
      var shrinkSpeedFactor = 0.5;
      var toolbarHeight;

      toolbarHeight = elm.prop('offsetHeight');

      var debouncedContentScroll = $$rAF.throttle(onScroll);

      angular.element($window).on('scroll', debouncedContentScroll);

      function onScroll(e) {
        var scrollTop = e ? this.scrollY : prevScrollTop;

        y = Math.min(
          toolbarHeight / shrinkSpeedFactor,
          Math.max(0, y + scrollTop - prevScrollTop)
        );

        var cssTranslateFactor = y * shrinkSpeedFactor;

        if ( cssTranslateFactor > 64 ) {
          cssTranslateFactor = 64;
        }

        elm.css(
          $mdConstant.CSS.TRANSFORM,
          'translate3d(0,' + (-cssTranslateFactor) + 'px,0)'
        );

        prevScrollTop = scrollTop;

      }
    }
  }
};

export default scrollNav