class SigninController {
  constructor(Auth, $state, $scope, toastr) {
    'ngInject';

    this._Auth = Auth;
    this._state = $state;
    this._scope = $scope;
    this._toastr = toastr;

    this._data = {
      username: '',
      password: ''
    };
    this._errormessage = '';
  }

  signin() {
    let self = this;
    self._errormessage = '';

    this._Auth.attempAuth('signin', this._data)
      .then((res) => {
        if (res.status == '201') {
          this._toastr.success('Bienvenido, ' + res.data.user.firstName);
          if (res.data.user.reset === 0) {
            this._state.go('dashboard');
          } else {
            this._state.go('resetpassword', { username: this._data.username });
          }
        } else {
          self._errormessage = res.data;
        }
      }, (err) => console.log('error: ' + err));
  }

  validation() {
    this._errormessage = '';
    angular.forEach(this._scope.sForm, function(value, key) {
         if (typeof value === 'object' && value.hasOwnProperty('$modelValue'))
             value.$setDirty();
     });
    return true;
  }
}

export default SigninController;
