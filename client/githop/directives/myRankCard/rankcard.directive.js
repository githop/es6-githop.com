/**
 *
 * Created by githop on 8/1/15.
 */
import template from './rank.tmpl.html!text';

let myRankCard = function() {

  class _ctrl {
    constructor($timeout, $mdDialog, $state) {
      'ngInject';
      this.$state = $state;
      this.$mdDialog = $mdDialog;
      this.chartData = '';
      $timeout(() => { this.chartData = this._formatChartData(); }, 800);
    }

    _formatChartData() {
      var chartData = [
        {name: 'positive', value: this.data.positiveWc},
        {name: 'negative', value: this.data.negativeWc},
        {name: 'neutral', value: this.data.neutralWc}
      ];

      //will be undefined;
      var colors = ['#3F51B5', '#F44336', '#f1f1f1'];
      chartData.colors = colors;
      this.loaded = true;
      return chartData;
    }

    infoDialog() {
      let dialog = this.$mdDialog.confirm()
        .title('Text Sentiment Analysis')
        .content
      (
        `The text content of this post was analyzed with a text sentiment analysis algorithim.
         It looks for positive, negative, or neutral words (using a 6k word dictionary) and will
         calculate the overall 'sentiment' of this post based upon the individual word scores.
         I wrote a blog post on how I did this, free to check it out!`
      )
        .ok('ok!')
        .cancel('sentiment post');

      this.$mdDialog.show(dialog).then(() => {
        console.log('ok');
      }, () => {
        this.$state.go('home.blog.post', {postId: 6});
      });
    }
  }

  return {
    template,
    restrict: 'EA',
    scope: {},
    controller: _ctrl,
    controllerAs: 'c',
    bindToController: {
      data: '='
    }
  };
};

export default myRankCard;
