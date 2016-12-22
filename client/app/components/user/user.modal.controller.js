export default class InstanceCtrl {
  constructor($uibModalInstance, $log, $filter, user) {
    this._uibModalInstance = $uibModalInstance;
    this._log = $log;
    this._user = user;

    this._title = (user)?'Editar usuario':'Nuevo usuario';
    this._data = { userId:null, firstName:'', lastName: '', username:''};
  }

  $onInit() {
    console.log(JSON.stringify(this._user))
    if (this._user) {
      this._data = this._user[0];
      delete this._data.enable;
      delete this._data.createDatetime;
    }
  }

  save() {
    this._uibModalInstance.close(this._data);
  };

  cancel() {
    this._uibModalInstance.dismiss(undefined,'cancel');
  };

}

InstanceCtrl.$inject = ['$uibModalInstance', '$log', '$filter', 'user'];
