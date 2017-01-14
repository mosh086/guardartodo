class RentController {
  constructor($scope, $filter, RentService) {
    "ngInject";

    this._Rent = RentService;

    this._rents = [];
    this._rentsTemp = [];
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

  }
}

export default RentController;
