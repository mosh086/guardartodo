class AsidemenuController {
  constructor(UserService) {
  "ngInject";
    this._UserService = UserService;
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

export default AsidemenuController;
