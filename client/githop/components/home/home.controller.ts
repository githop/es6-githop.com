/**
 * Created by githop on 7/31/15.
 */

export default class HomeCtrl {
  static $inject = ['User', 'Analysis'];
  constructor(User, Analysis) {
    this.User = User;
    this.currentUser = User.currentUser();
    this.analyzeWords = Analysis.analyzeWords;
    // Updates.check();
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
