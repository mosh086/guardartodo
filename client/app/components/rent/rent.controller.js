class RentController {
  constructor(ClientService, StoragelokerService) {
    this.name = 'rent';
    this._storagelokers = [];
    this._clients = [];
    this._selectStorageloker = null;
    this._selectClient = null;

    this._Client = ClientService;
    this._Storageloker = StoragelokerService;
  }

  $onInit(){
    console.log("initializing Rent...");
    this.getClients();
    this.getStorageloker();
  }

  getClients(){
    let self = this;
    this._Client
      .query(this.q)
      .then((res) => self._clients = res);
  }

  getStorageloker() {
    let self = this;
    this._Storageloker
      .query('available')
      .then((res) => self._storagelokers = res);
  }

}
RentController.$inject = ['ClientService', 'StoragelokerService'];
export default RentController;
