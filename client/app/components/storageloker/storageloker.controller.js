class StoragelokerController {
  constructor(StoragelokerService) {
    this.name = 'storageloker';
    this.storageloker = [];
    this._Storageloker = StoragelokerService;
  }

  $onInit() {
    console.log("initializing Storageloker...");
  }

  $onDestroy() {
    console.log("destroying Storageloker...");
  }

  search() {
    console.log("query storageloker by keyword" + this.q);
  }
}

StoragelokerController.$inject = ['StoragelokerService'];
export default StoragelokerController;
