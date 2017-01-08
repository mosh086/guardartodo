class ResetpasswordController {
  constructor($stateParams, $state, $scope, UserService) {
    'ngInject';
    this._state = $state;
    this._scope = $scope;
    this._User = UserService;

    this._data = {
      username:$stateParams.username
    }
  }

  validation() {
    angular.forEach(this._scope.rpForm, function(value, key) {
         if (typeof value === 'object' && value.hasOwnProperty('$modelValue'))
             value.$setDirty();
     });
    if(this._data.newpassword !== this._data.confirmpassword) {
      this._scope.rpForm.confirmpassword.$setValidity('confirm', false);
      return false;
    }
    return true;
  }

  reset(){
    let self = this;
    this._User.reset(self._data)
      .then(
        (res) => self._state.go('dashboard'),
        (err) => console.log(err)
      )
  }
}

export default ResetpasswordController;
