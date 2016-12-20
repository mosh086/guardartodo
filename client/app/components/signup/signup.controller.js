class SignupController {
  constructor(SignupService) {
    this.name = 'signup';
  }

  $onInit() {
    console.log("initializing Signup...");
  }

  $onDestroy() {
    console.log("destroying Signup...");
  }

  search() {
    console.log("query signup by keyword" + this.q);
  }
}

SignupController.$inject = ['SignupService'];
export default SignupController;
