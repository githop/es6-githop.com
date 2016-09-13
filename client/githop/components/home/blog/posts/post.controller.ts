/**
 *
 * Created by githop on 8/1/15.
 */

export default class PostCtrl {
  static $inject = ['$stateParams', '$document', 'Resources'];
  constructor($stateParams, $document, Resources) {
    var self = this;
    Resources.getArticle($stateParams.postId).then(function(post) {
      self.post = post;
    });

    $document.scrollTop(0);
  }
}