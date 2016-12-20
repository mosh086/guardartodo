class SigninController {
  constructor(SigninService) {
    this.name = 'signin';
  }

  $onInit() {
    console.log("initializing Signin...");
  }

  $onDestroy() {
    console.log("destroying Signin...");
  }

  search() {
    console.log("query signin by keyword" + this.q);
  }
}

SigninController.$inject = ['SigninService'];
export default SigninController;
