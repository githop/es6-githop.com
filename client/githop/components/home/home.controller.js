/**
 * Created by githop on 7/31/15.
 */
/*@ngInject*/
class HomeCtrl {
  constructor(User) {
    this.User = User;
    this.currentUser = User.currentUser();
  }

  login() {
    var currentUser = this.currentUser;
    this.User.login().then(function(user) {
      currentUser = user;
      console.log(currentUser);
    });
  }

  logOut() {
    this.currentUser = this.User.logout();
  }
}

export default HomeCtrl;