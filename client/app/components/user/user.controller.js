class UserController {
  constructor(UserService) {
    this.name = 'user';
    this.user = [];
    this._User = UserService;
  }

  $onInit() {
    console.log("initializing Users...");
    this.searchUsers();
  }

  $onDestroy() {
    console.log("destroying Users...");
  }

  search() {
    console.log("query user by keyword" + this.q);
  }

  searchUsers() {
    let self = this;
    this._User
      .query(this.q)
      .then(
      (res) => self.user = res
      );
  }
}

UserController.$inject = ['UserService'];
export default UserController;
