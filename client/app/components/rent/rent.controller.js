class RentController {
  constructor(RentService) {
    "ngInject";

    this._Rent = RentService;

    this._rents = [];
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
      .then((res) => self._rents = res,
        (err) => console.log('error: ' + err)
      );
  }
}

export default RentController;
