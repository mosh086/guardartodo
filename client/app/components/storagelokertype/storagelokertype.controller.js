class StoragelokertypeController {
  constructor(StoragelokertypeService) {
    this.name = 'storagelokertype';
    this.storagelokertype = [];
    this._Storagelokertype = StoragelokertypeService;
  }

  $onInit() {
    console.log("initializing Storagelokertype...");
    this.searchStoragelokertypes();
  }

  $onDestroy() {
    console.log("destroying Storagelokertype...");
  }

  search() {
    console.log("query storagelokertype by keyword" + this.q);
  }

  searchStoragelokertypes() {
    let self = this;
    this._Storagelokertype
      .query(this.q)
      .then(
      (res) => self.storagelokertype = res
      );
  }
}

StoragelokertypeController.$inject = ['StoragelokertypeService'];
export default StoragelokertypeController;
