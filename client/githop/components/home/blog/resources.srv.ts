/**
 *
 * Created by githop on 8/1/15.
 */
import _ from 'lodash';
Resources.$inject = ['$http', '$q', 'Article', 'Header', 'Para', 'Img', 'API_URL'];
export default function Resources($http, $q, Article, Header, Para, Img, API_URL) {
  var resourceManager = {};

  var _articles = [];
  var _users = [];
  var _headers = [];
  var _paragraphs = [];
  var _imgs = [];

  resourceManager.getArticle = getArticle;
  resourceManager.getArticles = getArticles;

  var _transformResp = function(resp) {
    var data = resp.data.data;
    if (data.length > 1) {
      return data.concat(resp.data.included);
    } else {
      return [data].concat(resp.data.included);
    }
  };

  var _findOrCreate = function(id, Type, collection, data) {
    var resource = _.find(collection, {id: id});
    if (resource) {
      return resource;
    } else if (Type === false) {
      collection.push(data);
      return data;
    } else {
      var obj = new Type(data);
      collection.push(obj);
      return obj;
    }
  };

  var _relateBatch = function(resources) {
    //associate articles with headers
    _.each(resources.articles, function(a) {
      _.each(a.getHeaderIds(), function(id) {
        var h = _.find(resources.headers, {id: id});
        a.setHeader(h);
      });

      _.each(a.getImgIds(), function(id) {
        var i = _.find(resources.imgs, {id: id});
        a.setImg(i);
      });
      var u = _.find(resources.users, {id: a.getAuthorId()});
      a.setAuthor(u);
      a.sortImgs();
    });

    //assoc headers w paras
    _.each(resources.headers, function(h) {
      _.each(h.getParaIds(), function(id) {
        var p = _.find(resources.paras, {id: id});
        h.setPara(p);
      });
    });
  };

  var _createBatch = function(resources) {
    var batch = {articles: [], paras: [], imgs: [], headers: [], users: []};
    _.each(resources, function(r) {
      switch (r.type) {
        case 'articles':
          batch.articles.push(_findOrCreate(r.id, Article, _articles, r));
          break;
        case 'paragraphs':
          batch.paras.push(_findOrCreate(r.id, Para, _paragraphs, r));
          break;
        case 'imgs':
          batch.imgs.push(_findOrCreate(r.id, Img, _imgs, r));
          break;
        case 'headers':
          batch.headers.push(_findOrCreate(r.id, Header, _headers, r));
          break;
        case 'users':
          batch.users.push(_findOrCreate(r.id, false, _users, r));
          break;
      }
    });
    return _relateBatch(batch);
  };

  var _loadArticle = function(id, dfd) {
    $http.get(API_URL + '/articles/' + id)
      .then(function(resp) {
        var response = _transformResp(resp);
        _createBatch(response);
        dfd.resolve(_.find(_articles, {id: id}));
      }, function(e) {
        dfd.reject(e);
      });
  };

  var _init = function() {
    var dfd = $q.defer();

    $http.get(API_URL + '/articles')
      .then(function(resp) {
        var resources = _transformResp(resp);
        _createBatch(resources);
        dfd.resolve(_articles);
      }, function(e) {
        dfd.reject(e);
      });
    return dfd.promise;
  };

  _init();

  function getArticle(id) {
    var dfd = $q.defer();
    var article = _.find(_articles, {id: id});
    if (article) {
      dfd.resolve(article);
    } else {
      _loadArticle(id, dfd);
    }
    return dfd.promise;
  }

  function getArticles() {
    return _articles;
  }

  return resourceManager;
};

