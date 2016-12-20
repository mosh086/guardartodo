class ClientController {
  constructor(ClientSevice) {
    this.name = 'client';
  }

  $onInit() {
    console.log("initializing Client...");
  }

  $onDestroy() {
    console.log("destroying Client...");
  }

  search() {
    console.log("query client by keyword" + this.q);
  }
}

ClientController.$inject = ['ClientSevice'];
export default ClientController;
