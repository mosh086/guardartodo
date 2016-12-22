export default class InstanceCtrl {
  constructor($uibModalInstance, $log, $filter, storageloker, storagelokertypes) {
    this._uibModalInstance = $uibModalInstance;
    this._log = $log;
    this._storageloker = storageloker;
    this._storagelokertypes = storagelokertypes;
    this._filter = $filter;
    this._title = (storageloker)?'Editar bodega':'Nueva bodega';
    this._selectSlt = undefined;
    this._data = { storagelokerId:null, storagelokertypeId:null, number: ''};
  }

  $onInit() {
    if (this._storageloker) {
      this._data = this._storageloker[0];
      this._selectSlt = this._filter('filter')(this._storagelokertypes, { storagelokertypeId: parseInt(this._data.storagelokertypeId ) }, true)[0];
      delete this._data.enable;
      delete this._data.createDatetime;
    }
  }

  save() {
    this._data.storagelokertypeId = this._selectSlt.storagelokertypeId;
    this._uibModalInstance.close(this._data);
  };

  cancel() {
    this._uibModalInstance.dismiss(undefined,'cancel');
  };

}

InstanceCtrl.$inject = ['$uibModalInstance', '$log', '$filter', 'storageloker', 'storagelokertypes'];
