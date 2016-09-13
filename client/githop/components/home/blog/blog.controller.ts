/**
 *
 * Created by githop on 8/1/15.
 */

export default class BlogCtrl {
  static $inject = ['$state', '$document', 'Resources'];
  private $state;
  private posts;
  constructor($state, $document, Resources) {
    this.$state = $state;
    this.posts = Resources.getArticles();
    $document.scrollTop(0);
  }

  goToPost(id) {
    this.$state.go('home.blog.post', {postId: id});
  }
}