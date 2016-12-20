export default class InstanceCtrl {
    constructor($uibModalInstance, $log, $filter, storageloker) {
        this._uibModalInstance = $uibModalInstance;
        this._log = $log;
        this._storageloker = storageloker;
    }

    ok() {
      _uibModalInstance.close();
    };

    cancel() {
      _uibModalInstance.dismiss(InstanceCtrl,'cancel');
    };

}

InstanceCtrl.$inject = ['$uibModalInstance', '$log', '$filter', 'storageloker'];
