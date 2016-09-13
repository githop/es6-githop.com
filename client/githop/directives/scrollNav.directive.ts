/**
 * Created by githop on 7/31/15.
 */
import $ from 'jquery';

scrollNav.$inject = ['$window', '$$rAF', '$mdConstant'];
export default function scrollNav($window, $$rAF, $mdConstant) {
  return {
    restrict: 'A',
    link: function(scope, elm, attr) {

      var navElm = $('#my-nav');

      var body = $('#res-col');
      var y = 0;
      var prevScrollTop = 0;
      var shrinkSpeedFactor = 0.5;
      var toolbarHeight;

      toolbarHeight = elm.prop('offsetHeight');

      var debouncedContentScroll = $$rAF.throttle(onScroll);

      $($window).on('scroll', debouncedContentScroll);

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
  };
}