export default class InstanceCtrl {
  constructor($uibModalInstance, $log, $scope, $filter, $timeout, client, KindOfBusiness, LineOfBusiness) {
    "ngInject";

    this._uibModalInstance = $uibModalInstance;
    this._log = $log;
    this._scope =$scope;
    this._$timeout = $timeout;

    this._client = client;

    this._title = (client)?'Editar cliente':'Nuevo cliente';
    this._data = {
      clientId:null, name: '',
      street: '', town: '',
      country: '', state: '', zipcode: '',
      phone: '', cellPhone: '', email: '',
      rfc: '',
      kindOfBusiness: '', legalRepresentative: '', lineOfBusiness: '',
    };
    this._lineOfBusiness = LineOfBusiness;
    this._kindOfBusiness = KindOfBusiness;
  }

  $onInit() {
    this._$timeout(function() {
      $('.gt-mask-phone').mask('000 000 0000');
      $('.gt-mask-zipcode').mask('00000');
    }, 0);

    if (this._client) {
      this._data = this._client;
      delete this._data.enable;
      delete this._data.createDatetime;
    }
  }

  save() {
    let self = this;
    this._uibModalInstance.close(self._data);
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
