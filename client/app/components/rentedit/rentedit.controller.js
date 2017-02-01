class RenteditController {
  constructor($scope, $stateParams, toastr, Print,
    ClientService, StoragelokerService, StoragelokertypeService, RentService, UserService) {
    "ngInject";

    this._scope = $scope;
    this._toastr = toastr;

    this._Client = ClientService;
    this._Storageloker = StoragelokerService;
    this._Storagelokertype = StoragelokertypeService;
    this._Rent = RentService;
    this._User = UserService;
    this._Print = Print;

    this._storagelokertype = {};
    this._storagelokers = [];
    this._clients = [];
    this._users = [];

    this._saved = false;

    this._data = {
      client: null,
      storageloker: null,
      storagelokertype: null,
      user: null,
      startDate: null,
      cost: 0.00,
      extra: 0.00,
      iva: 0.00,
      total: 0.00
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
    this.getUsers();
    this._data.startDate = new Date();
  }

  getClients(){
    let self = this;
    this._Client
      .query(this.q)
      .then((res) => self._clients = res,
        (err) => {
          console.log('error: ' + err);
          self._toastr.error(`Error ${err.message}`);
        }
      );
  }

  getStorageloker() {
    let self = this;
    this._Storageloker
      .query('available')
      .then((res) => self._storagelokers = res,
        (err) => {
          console.log('error: ' + err);
          self._toastr.error(`Error ${err.message}`);
        }
      );
  }

  getUsers() {
    let self = this;
    this._User
      .query(this.q)
      .then((res) => { console.log(res); self._users = res},
        (err) => {
          console.log('error: ' + err);
          self._toastr.error(`Error ${err.message}`);
        }
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
        }, (err) => {
          console.log('error: ' + err);
          self._toastr.error(`Error ${err.message}`);
        }
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
    console.log(self._data);
    this._Rent.save(self._data)
      .then((res) => {
            self._saved = true;
          }, (err) => {
            console.log(err);
            self._toastr.error(`Error ${err.message}`);
          }
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
            self.searchClient(res.clientId);
            self.searchStorageloker(res.storagelokerId);
            self.searchUser(id);
          }, (err) => {
            console.log('error: ' + err);
            self._toastr.error(`Error ${err.message}`);
          }
      )
  };

  searchClient(id) {
    let self = this;
    this._Client.get(id)
      .then((res) => {
            self._data.client = res;
          }, (err) => {
            console.log('error: ' + err);
            self._toastr.error(`Error ${err.message}`);
          }
      )
  }

  searchStorageloker(id) {
    let self = this;
    this._Storageloker.get(id)
      .then((res) => {
            self._data.storageloker = res;
            self.searchStoragelokertype(res.storagelokertypeId);
          }, (err) => {
            console.log('error: ' + err);
            self._toastr.error(`Error ${err.message}`);
          }
      )
  }

  searchStoragelokertype(id) {
    let self = this;
    this._Storagelokertype.get(id)
      .then((res) => {
            self._data.storagelokertype = res;
          }, (err) => {
            console.log('error: ' + err);
            self._toastr.error(`Error ${err.message}`);
          }
      )
  }

  searchUser(id) {
    let self = this;
    this._User.getByRentId(id)
      .then((res) => {
            self._data.user = res;
          }, (err) => {
            console.log('error: ' + err);
            self._toastr.error(`Error ${err.message}`);
          }
      )
  }
}

export default RenteditController;
