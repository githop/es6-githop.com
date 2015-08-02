/**
 * Created by githop on 7/31/15.
 */

class HomeCtrl {
  constructor(User) {
    'ngInject';
    this.User = User;
    this.currentUser = User.currentUser();
  }

  login() {
    var self = this;
    this.User.login().then(function(user) {
      self.currentUser = user;
    });
  }

  logOut() {
    this.currentUser = this.User.logout();
  }
}

export default HomeCtrl;
