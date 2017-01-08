class ResetpasswordController {
  constructor($stateParams, $state, UserService) {
    'ngInject';
    this.name = 'resetpassword';
    this.data = {
      username:$stateParams.username,
      password:null,
      newpassword:null,
      confirmpassword:null
    }
    this.messageerror = "";

    this._User = UserService;
  }

  reset(){
    let self = this;
    if(this.data.newpassword !== this.data.confirmpassword) {
      this.messageerror = "confirmacion erronea"
      return false;
    }
    if(this.data.password === '' || this.data.newpassword === '') {
      this.messageerror = "password es requerido"
      return false;
    }

    this._User.reset(self.data)
      .then((res) => {
        $state.go('dashboard');
      })

  }
}

export default ResetpasswordController;
