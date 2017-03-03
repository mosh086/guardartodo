class RenteditController {
  constructor($scope, $state, $stateParams, toastr, Documents,
    ClientService, StoragelokerService, StoragelokertypeService, RentService, UserService, PromotionService) {
    "ngInject";

    this._scope = $scope;
    this._state = $state;
    this._toastr = toastr;
    this._stateParams = $stateParams;

    this._Client = ClientService;
    this._Storageloker = StoragelokerService;
    this._Storagelokertype = StoragelokertypeService;
    this._Rent = RentService;
    this._User = UserService;
    this._Promotion = PromotionService;
    this._Documents = Documents;

    this._storagelokertype = {};
    this._storagelokers = [];
    this._clients = [];
    this._users = [];
    this._promotions = [];

    this._saved = false;

    this._data = {
      client: null,
      storageloker: null,
      storagelokertype: null,
      user: null,
      promotion: null,
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
    this.getPromotions();
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
      .then((res) => self._users = res,
        (err) => {
          console.log('error: ' + err);
          self._toastr.error(`Error ${err.message}`);
        }
      );
  }

  getPromotions() {
    let self = this;
    this._Promotion
      .query(this.q)
      .then((res) => self._promotions = res,
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
    let tempId = self._data.rentId;
    delete self._data.name;
    delete self._data.number;
    this._Rent.save(self._data)
      .then((res) => {
          if (res.data.insertId > 0) {
            self._data.rentId = res.data.insertId;
            self._toastr.success(`Renta creada correctamente`);
            self.print();
            self._state.go('rent');
          } else {
            self._data.rentId = tempId;
            self._toastr.success(`Renta actualizada correctamente`);
          }
          self._saved = true;
          if (typeof tempId == "undefined") {
            self._data.rentId = res.data.insertId;
          } else {
            self._data.rentId = tempId;
          }
        }, (err) => {
          self._toastr.error(`Error ${err.message}`);
        }
      )
  }

  print(){
    let self = this;
    self._Documents.openContract(self._data);
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
            self.searchPromotion(id);
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

  searchPromotion(id) {
    let self = this;
    this._Promotion.getByRentId(id)
      .then((res) => {
            self._data.promotion = res;
          }, (err) => {
            console.log('error: ' + err);
            self._toastr.error(`Error ${err.message}`);
          }
      )
  }
}

export default RenteditController;
