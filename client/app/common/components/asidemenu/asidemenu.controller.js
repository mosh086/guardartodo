class AsidemenuController {
  constructor(UserService) {
    this._UserService = UserService;
    this.name = 'asidemenu';
    this.current = {};
  }

  $onInit() {
    this.getMe();
  }

  getMe() {
    let self = this;
    this._UserService.me()
      .then((res) => {
        self.current = res.data[0];
      });
  }
}
AsidemenuController.$inject = ['UserService'];
export default AsidemenuController;
