/**
 *
 * Created by githop on 8/2/15.
 */
Analysis.$inject = ['$http', '$q', '$mdDialog', 'API_URL'];
export default function Analysis($http, $q, $mdDialog, API_URL) {
  var analysis = {};

  analysis.postWords = postWords;
  analysis.analyzeWords = analyzeWords;

  var _resultsController = function($mdDialog, analysis) {
    var results = this;
    results.rank = analysis.rank;
    results.words = analysis.words;

    //positive, negative,  neutral
    results.colors = ['#3F51B5', '#F44336', '#f1f1f1'];
    results.chartData = analysis.chartData;
    results.posWc = analysis.posWc;
    results.negWc = analysis.negWc;
    results.neuWc = analysis.neuWc;

    results.close = function() {
      $mdDialog.hide();
    };
  };

  var _resultsModal = function(results) {
    $mdDialog.show({
      controller: ['$mdDialog', 'analysis', _resultsController],
      controllerAs: 'results',
      templateUrl: 'results.tmpl.html',
      parent: angular.element(document.body),
      locals: {analysis: results}
    }).then(function() {
      //console.log('closed');
    });
  };

  var _formatChartData = function(wc) {
    var chartData = [
      {name: 'positive', value: wc.positive},
      {name: 'negative', value: wc.negative},
      {name: 'neutral', value: wc.neutral}
    ];

    return chartData;
  };

  function postWords(words) {
    var dfd = $q.defer();
    $http.post(API_URL + '/analyze', {
      words: words
    }).then(function(resp) {
      var result = {
        chartData: _formatChartData(resp.data.wordCounts),
        rank: resp.data.rank,
        words: resp.data.words,
        posWc: resp.data.wordCounts.positive,
        negWc: resp.data.wordCounts.negative,
        neuWc: resp.data.wordCounts.neutral
      };
      dfd.resolve(result);
    }, function(e) {
      dfd.reject(e);
    });

    return dfd.promise;
  }

  function analyzeWords(words) {
    if (words) {
      postWords(words).then(function(results) {
        _resultsModal(results);
      });
    }
  }

  return analysis;
};