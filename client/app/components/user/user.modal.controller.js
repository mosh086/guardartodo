export default class InstanceCtrl {
    constructor($uibModalInstance, $log, $filter, user) {
        this._uibModalInstance = $uibModalInstance;
        this._log = $log;
        this._user = user;

        this._title = (user)?'Editar usuario':'Nuevo usuario';
        this._data = { userId:null, firstName:'', lastName: '', username:''};
    }

    save() {
      this._uibModalInstance.close(this._data);
    };

    cancel() {
      this._uibModalInstance.dismiss(undefined,'cancel');
    };

}

InstanceCtrl.$inject = ['$uibModalInstance', '$log', '$filter', 'user'];
