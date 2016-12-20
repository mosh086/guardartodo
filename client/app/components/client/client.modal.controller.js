export default class InstanceCtrl {
    constructor($uibModalInstance, $log, $filter, client) {
        this._uibModalInstance = $uibModalInstance;
        this._log = $log;
        this._client = client;
    }

    ok() {
      _uibModalInstance.close();
    };

    cancel() {
      _uibModalInstance.dismiss(InstanceCtrl,'cancel');
    };

}

InstanceCtrl.$inject = ['$uibModalInstance', '$log', '$filter', 'client'];
