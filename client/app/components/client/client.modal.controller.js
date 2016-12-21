export default class InstanceCtrl {
    constructor($uibModalInstance, $log, $filter, client) {
        this._uibModalInstance = $uibModalInstance;
        this._log = $log;
        this._client = client;

        this._title = (client)?'Editar cliente':'Nuevo cliente';
        this._data = {
          clientId:null, firstName: '', lastName: '',
          phone: '', cellPhone: '', email: ''
        };
    }

    save() {
      console.log(JSON.stringify(this._data));
      this._uibModalInstance.close(this._data);
    };

    cancel() {
      this._uibModalInstance.dismiss(undefined,'cancel');
    };

}

InstanceCtrl.$inject = ['$uibModalInstance', '$log', '$filter', 'client'];
