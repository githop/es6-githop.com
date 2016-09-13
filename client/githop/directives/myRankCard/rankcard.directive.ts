/**
 *
 * Created by githop on 8/1/15.
 */
import template from './rank.tmpl.html';

  const existy = (x) => x != null;

  class _ctrl {
    static $inject = ['$scope', '$mdDialog', '$state'];
    constructor($scope, $mdDialog, $state) {
      this.$state = $state;
      this.$mdDialog = $mdDialog;
      this.chartData = '';
      this.$scope = $scope;
    }

    $onChanges() {
      this.$scope.$evalAsync(() => {
        this.chartData = this._formatChartData();
      });
    }

    _formatChartData() {
      if (!existy(this.data)) {
        return '';
      }

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

  var directive = {
    template,
    restrict: 'EA',
    scope: {},
    controller: _ctrl,
    controllerAs: 'c',
    bindToController: {
      data: '='
    }
  };

  const component = {
    template,
    bindings: {
      data: '<'
    },
    controller: _ctrl
  };

export default component;
