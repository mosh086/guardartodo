class RentController {
  constructor($scope, $filter, toastr, RentService, ClientService, StoragelokerService, StoragelokertypeService, Print) {
    "ngInject";

    this._toastr = toastr;
    this._Client = ClientService;
    this._Storageloker = StoragelokerService;
    this._Storagelokertype = StoragelokertypeService;
    this._Rent = RentService
    this._Print = Print;

    this._rents = [];
    this._rentsTemp = [];
    this._data = {};

    let self = this;
    $scope.$watch('search', function (val) {
      self._rents = $filter('filter')(self._rentsTemp, val);
    });
  }

  $onInit() {
    console.log("initializing Rent...");
    this.searchRents();
  }

  $onDestroy() {
    console.log("destroying Rent...");
  }

  searchRents() {
    let self = this;
    this._Rent
      .query(this.q)
      .then((res) => {
        self._rents = res;
        self._rentsTemp = res;
      },
        (err) => console.log('error: ' + err)
      );
  }

  print(id) {
    let self = this;
    this.searchRent(id);
  }

  searchRent(id){
    let self = this;
    this._Rent.get(id)
      .then((res) => {
            self._data = res
            self._data.startDate = new Date(self._data.startDate)
            self.searchClient(res.clientId, res.storagelokerId);
          },
        (err) => console.log('error: ' + err)
      )
  };

  searchClient(clientId, storagelokerId) {
    let self = this;
    this._Client.get(clientId)
      .then((res) => {
            self._data.client = res;
            self.searchStorageloker(storagelokerId);
          },
        (err) => console.log('error: ' + err)
      )
  }

  searchStorageloker(id) {
    let self = this;
    this._Storageloker.get(id)
      .then((res) => {
            self._data.storageloker = res;
            self.searchStoragelokertype(res.storagelokertypeId);
          },
        (err) => console.log('error: ' + err)
      )
  }

  searchStoragelokertype(id) {
    let self = this;
    this._Storagelokertype.get(id)
      .then((res) => {
            self._data.storagelokertype = res;
            self._Print.open(self._data);
          },
        (err) => console.log('error: ' + err)
      )
  }
}

export default RentController;
