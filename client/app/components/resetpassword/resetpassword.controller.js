class ResetpasswordController {
  constructor($stateParams) {
    'ngInject';
    this.name = 'resetpassword';
    this.data = {
      username:$stateParams.username,
      password:null,
      newpassword:null,
      confirmpassword:null
    }
    this.messageerror = "";
  }

  reset(){
    if(this.data.newpassword !== this.data.confirmpassword) {
      this.messageerror = "confirmacion erronea"
      return false;
    }
    if(this.data.password !== '' && this.data.newpassword !== '') {
      this.messageerror = "password es requerido"
      return false;
    }


  }
}

export default ResetpasswordController;
