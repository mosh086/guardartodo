export default class InstanceCtrl {
  constructor($uibModalInstance, $log, $scope, $filter, client) {
    "ngInject";

    this._uibModalInstance = $uibModalInstance;
    this._log = $log;
    this._scope =$scope;

    this._client = client;

    this._title = (client)?'Editar cliente':'Nuevo cliente';
    this._data = {
      clientId:null, firstName: '', lastName: '',
      street: '', town: '',
      country: '', state: '', zipcode: '',
      phone: '', cellPhone: '', email: '',
      rfc: '',
      kindOfBusiness: '', legalRepresentative: '', lineOfBusiness: '',
    };
  }

  $onInit() {
    if (this._client) {
      this._data = this._client;
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
    angular.forEach(this._scope.cForm, function(value, key) {
         if (typeof value === 'object' && value.hasOwnProperty('$modelValue'))
             value.$setDirty();
     });
    return true;
  }

}
