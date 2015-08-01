/**
 *
 * Created by githop on 8/1/15.
 */
import template from './rank.tmpl.html!text';

let myRankCard = function() {
  return {
    template,
    restrict: 'EA',
    scope: {
      sentimentRank: '@',
      positiveWc: '@',
      negativeWc: '@',
      neutralWc: '@'
    }
  }
};

export default myRankCard;
