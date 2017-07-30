export default class InstanceCtrl {
  constructor($uibModalInstance, $log, $filter, $scope, user, UserService) {
    "ngInject";

    this._uibModalInstance = $uibModalInstance;
    this._log = $log;
    this._scope = $scope;
    this._user = user;
    this._UserService = UserService;

    this._title = (user)?'Editar usuario':'Nuevo usuario';
    this._data = {
      userId:null,
      firstName:'',
      lastName: '',
      username:'',
      imgUrl:''
    };

    this._max = 16;
  }

  $onInit() {
    if (this._user) {
      this._data = this._user;
      delete this._data.enable;
      delete this._data.createDatetime;
    } else {
      let num = Math.floor(Math.random()*this._max)+1;
      this._data.imgUrl = `users-${num}.svg`;
    }

  }

  save() {
    this._uibModalInstance.close(this._data);
  };

  cancel() {
    this._uibModalInstance.dismiss('cancel');
  };

  validate() {




    angular.forEach(this._scope.uForm, function(value, key) {
         if (typeof value === 'object' && value.hasOwnProperty('$modelValue'))
             value.$setDirty();
     });

    this._UserService
      .validate()
      .then((res) => {
        console.log('true')
        return false;
      },(err) => {
        console.log('false')
        return false;
      });


  }

  up() {
    let num = parseInt(this._data.imgUrl.replace('users-', '').replace('.svg', ''));
    num += 1;
    if (num > this._max) num = 1;
    this._data.imgUrl = `users-${num}.svg`
  }

  down() {
    let num = parseInt(this._data.imgUrl.replace('users-', '').replace('.svg', ''));
    num -= 1;
    if (num < 1) num = this._max;
    this._data.imgUrl = `users-${num}.svg`
  }
}
