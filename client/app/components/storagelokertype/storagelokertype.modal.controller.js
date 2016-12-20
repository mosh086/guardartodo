export default class InstanceCtrl {
    constructor($uibModalInstance, $log, $filter, storagelokertype) {
        this._uibModalInstance = $uibModalInstance;
        this._log = $log;
        this._storagelokertype = storagelokertype;
    }

    ok() {
      _uibModalInstance.close();
    };

    cancel() {
      _uibModalInstance.dismiss(InstanceCtrl,'cancel');
    };

}

InstanceCtrl.$inject = ['$uibModalInstance', '$log', '$filter', 'storagelokertype'];
