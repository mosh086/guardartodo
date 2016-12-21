export default class InstanceCtrl {
    constructor($uibModalInstance, $log, $filter, client) {
        this._uibModalInstance = $uibModalInstance;
        this._log = $log;
        this._client = client;

        this._title = (client)?'Editar cliente':'Nuevo cliente';
    }

    ok() {
      this._uibModalInstance.close();
    };

    cancel() {
      this._uibModalInstance.dismiss(InstanceCtrl,'cancel');
    };

}

InstanceCtrl.$inject = ['$uibModalInstance', '$log', '$filter', 'client'];
