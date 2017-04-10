export default class InstanceCtrl {
  constructor($uibModalInstance, $log, $scope, $filter, promotion, promotiontypes) {
    "ngInject";

    this._uibModalInstance = $uibModalInstance;
    this._log = $log;
    this._scope = $scope;
    this._filter = $filter;
    this._promotion = promotion;
    this._promotiontypes = promotiontypes;
    this._types = [{
        id: 1,
        name: 'Cantidad'
      }, {
        id: 2,
        name: 'Porcentaje'
      }];

    this._title = (promotion)?'Editar promoción':'Nueva promoción';
    this._data = {
      promotionId:null,
      promotiontype: null,
      promotiontypeId: null,
      types: null,
      percentage: 0,
      amount: 0
    };
  }

  $onInit() {
    if (this._promotion) {
      this._data = this._promotion;
      this._data.promotiontype = this._filter('filter')(this._promotiontypes, { promotiontypeId: parseInt(this._data.promotiontypeId ) }, true)[0];
      delete this._data.enable;
      delete this._data.createDatetime;
    }
  }

  save() {
    this._data.promotiontypeId = this._data.promotiontype.promotiontypeId;
    delete this._data.promotiontype;
    this._uibModalInstance.close(this._data);
  };

  cancel() {
    this._uibModalInstance.dismiss('cancel');
  };

  validate() {
    angular.forEach(this._scope.pForm, function(value, key) {
         if (typeof value === 'object' && value.hasOwnProperty('$modelValue'))
             value.$setDirty();
     });
    return true;
  }

}
