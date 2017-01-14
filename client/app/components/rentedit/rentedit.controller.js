class RenteditController {
  constructor($scope, ClientService, StoragelokerService, StoragelokertypeService, RentService, Print, $stateParams) {
    "ngInject";

    this._scope = $scope;

    this._Client = ClientService;
    this._Storageloker = StoragelokerService;
    this._Storagelokertype = StoragelokertypeService;
    this._Rent = RentService
    this._Print = Print;

    this._storagelokertype = {};
    this._storagelokers = [];
    this._clients = [];

    this._saved = false;

    this._data = {
      client: null,
      storageloker: null,
      storagelokertype: null,
      startDate: null,
      cost: '',
      extra: '',
      iva: '',
      total:''
    }

    this._dateOptions = {
      dateDisabled: function (data) {
                      var date = data.date,
                      mode = data.mode;
                      return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
                    },
      formatYear: 'yyyy',
      maxDate: new Date(2200, 1, 1),
      minDate: new Date(1980, 1, 1),
      startingDay: 1
    };

    if ($stateParams.id) {
      this.searchRent($stateParams.id);
    }

  }

  popupDatepicker = {
    opened: false
  };

  open = function() {
    this.popupDatepicker.opened = true;
  };

  $onInit(){
    console.log("initializing Rent...");
    this.getClients();
    this.getStorageloker();
    this._data.startDate = new Date();
  }

  getClients(){
    let self = this;
    this._Client
      .query(this.q)
      .then((res) => self._clients = res,
        (err) => console.log("Error " + err)
      );
  }

  getStorageloker() {
    let self = this;
    this._Storageloker
      .query('available')
      .then((res) => self._storagelokers = res,
        (err) => console.log("Error " + err)
      );
  }

  onStoragelokerSelect(selected) {
    let self = this;
    this._Storagelokertype
      .get(selected)
      .then((res) => {
          self._storagelokertype = res;
          self._data.storagelokertype = res;
          self._data.total = self._storagelokertype.price;
        }, (err) => console.log("Error " + err)
      );
  }

  validate() {
    angular.forEach(this._scope.rForm, function(value, key) {
        if (typeof value === 'object' && value.hasOwnProperty('$modelValue'))
          value.$setDirty();
     });
    return true;
  }

  save() {
    let self = this;
    this._Rent.save(self._data)
      .then((res) => {
            self._saved = true;
          },
        (err) => console.log('error: ' + err)
      )
  }

  print(){
    let self = this;
    self._Print.open(self._data);
  }

  searchRent(id){
    let self = this;
    this._Rent.get(id)
      .then((res) => {
            self._data = res
            self._data.startDate = new Date(self._data.startDate)
          },
        (err) => console.log('error: ' + JSON.stringify(err))
      )
  };
}

export default RenteditController;
