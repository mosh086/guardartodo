export default class InstanceCtrl {
  constructor($uibModalInstance, $log, $filter, user) {
    "ngInject";

    this._uibModalInstance = $uibModalInstance;
    this._log = $log;
    this._user = user;

    this._title = (user)?'Editar usuario':'Nuevo usuario';
    this._data = {
      userId:null,
      firstName:'',
      lastName: '',
      username:''
    };
  }

  $onInit() {
    if (this._user) {
      this._data = this._user;
      delete this._data.enable;
      delete this._data.createDatetime;
    }
  }

  save() {
    this._uibModalInstance.close(this._data);
  };

  cancel() {
    this._uibModalInstance.dismiss('cancel');
  };
}
