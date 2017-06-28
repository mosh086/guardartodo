export default class InstanceCtrl {
  constructor($uibModalInstance, $log, $scope, $filter, client) {
    "ngInject";

    this._uibModalInstance = $uibModalInstance;
    this._log = $log;
    this._scope =$scope;

    this._client = client;

    this._title = `Archivos - ${client.name}`;
    this._data = {
      description: '',
      file: null,
      urlfile:'',
      clientId :this._client.clientId
    };
  }

  $onInit() {

  }

  save() {
    let self = this;
    this._uibModalInstance.close(self._data);
  };

  cancel() {
    this._uibModalInstance.dismiss('cancel');
  };

  validate() {
    angular.forEach(this._scope.fForm, function(value, key) {
         if (typeof value === 'object' && value.hasOwnProperty('$modelValue'))
             value.$setDirty();
     });
    return true;
  }

}
