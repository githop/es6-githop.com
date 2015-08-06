/**
 *
 * Created by githop on 8/1/15.
 */

class BlogCtrl {
  constructor($state, $document, Resources) {
    'ngInject';
    this.$state = $state;
    this.posts = Resources.getArticles();
    $document.scrollTop(0);
  }

  goToPost(id) {
    this.$state.go('home.blog.post', {postId: id});
  }
}

export default BlogCtrl;
