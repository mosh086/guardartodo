class SigninController {
  constructor(Auth, $state, toastr) {
    'ngInject';

    this._Auth = Auth;
    this._$state = $state;
    this._toastr = toastr;

    this._data = {
      username: '',
      password: ''
    };
  }

  signin() {
    this._Auth.attempAuth('signin', this._data)
      .then((res) => {
        if (res.status == '201') {
          this._toastr.success('Welcome back,' + this._data.username);
          if (res.data.user.reset === 0) {
            this._$state.go('dashboard');
          } else {
            this._$state.go('resetpassword', { username: this._data.username });
          }
        }
      }, (err) => console.log('error: ' + err));
  }
}

export default SigninController;
