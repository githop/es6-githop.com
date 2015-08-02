/**
 *
 * Created by githop on 8/1/15.
 */

class PostCtrl {
  constructor($stateParams, Resources) {
    'ngInject';
    var self = this;
    Resources.getArticle($stateParams.postId).then(function(post) {
      self.post = post;
    });
  }
}

export default PostCtrl;
