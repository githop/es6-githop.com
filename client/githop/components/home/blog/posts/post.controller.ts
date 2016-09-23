/**
 *
 * Created by githop on 8/1/15.
 */

export default class PostCtrl {
  static $inject = ['$stateParams', '$document', 'Resources'];
  public post;
  constructor($stateParams, $document, Resources) {
    Resources.getArticle($stateParams.postId).then((post) => {
      this.post = post;
    });

    $document.scrollTop(0);
  }
}