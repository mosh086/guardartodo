class SigninController {
  constructor(Auth, $state, toastr) {
    'ngInject';

    this._Auth = Auth;
    this._$state = $state;
    this._toastr = toastr;
    this.name = 'signin';
    this.data = { username: '', password: '' };
  }

  signin() {
    console.log("signin with credentials:" + JSON.stringify(this.data));
    this._Auth.attempAuth('signin', this.data)
      .then((res) => {
        if (res.status == '201') {
          this._toastr.success('Welcome back,' + this.data.username);
          if (this.data.reset === 0) {
            this._$state.go('dashboard');
          } else {
            console.log('geeeee');
            this._$state.go('resetpassword', { username: this.data.username });
          }
        }
      });
  }
}

export default SigninController;
