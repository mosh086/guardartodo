export default class InstanceCtrl {
  constructor($uibModalInstance, $log, $scope, storagelokertype) {
    "ngInject";

    this._uibModalInstance = $uibModalInstance;
    this._log = $log;
    this._scope = $scope;
    this._storagelokertype = storagelokertype;

    this._title = (storagelokertype)?'Editar tipo de bodega':'Nuevo tipo de bodega';
    this._data = {
      storagelokertypeId:null,
      name:null,
      description:null,
      price:null,
      size:null
    };
  }

  $onInit() {
    if (this._storagelokertype) {
      this._data = this._storagelokertype;
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

  validate() {
    angular.forEach(this._scope.styForm, function(value, key) {
         if (typeof value === 'object' && value.hasOwnProperty('$modelValue'))
             value.$setDirty();
     });
    return true;
  }

}
