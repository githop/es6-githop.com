/**
 *
 * Created by githop on 8/1/15.
 */

class PostCtrl {
  constructor($stateParams, $document, Resources) {
    'ngInject';
    var self = this;
    Resources.getArticle($stateParams.postId).then(function(post) {
      self.post = post;
    });

    $document.scrollTop(0);
  }
}

export default PostCtrl;
