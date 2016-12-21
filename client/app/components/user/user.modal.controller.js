export default class InstanceCtrl {
    constructor($uibModalInstance, $log, $filter, user) {
        this._uibModalInstance = $uibModalInstance;
        this._log = $log;
        this._user = user;

        this._title = (user)?'Editar usuario':'Nuevo usuario';
    }

    ok() {
      this._uibModalInstance.close();
    };

    cancel() {
      this._uibModalInstance.dismiss('cancel');
    };

}

InstanceCtrl.$inject = ['$uibModalInstance', '$log', '$filter', 'user'];
