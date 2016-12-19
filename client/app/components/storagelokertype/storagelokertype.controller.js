class StoragelokertypeController {
  constructor(StoragelokertypeService) {
    this.name = 'storagelokertype';
    this.storagelokertype = [];
    this._Storagelokertype = StoragelokertypeService;
  }

  $onInit() {
    console.log("initializing Posts...");
    this.storagelokertype = this._Storagelokertype.getAll();
  }

  $onDestroy() {
    console.log("destroying Posts...");
  }

  search() {
    console.log("query posts by keyword" + this.q);
  }
}

StoragelokertypeController.$inject = ['StoragelokertypeService'];
export default StoragelokertypeController;
