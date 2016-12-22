import modalTemplate from './client.modal.html'
import modalInstanceCtrl from './client.modal.controller'

class ClientController {
  constructor($uibModal, ClientService) {
    this.name = 'client';
    this.client = [];
    this._uibModal = $uibModal;
    this._Client = ClientService;
  }

  $onInit() {
    console.log("initializing Client...");
    this.searchClients();
  }

  $onDestroy() {
    console.log("destroying Client...");
  }


  openDialog(id){
    let self = this;
    let modalInstance = this._uibModal.open({
      animation: true,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      template: modalTemplate,
      controller: modalInstanceCtrl,
      controllerAs: '$ctrl',
      size: 'lg',
      resolve: {
        client: function () {
          return (id)?self._Client.get(id):undefined;
        }
      }
    });

    modalInstance.result.then(function (data) {
      self.save(data);
    }, function () {

    });
  }

  save(data) {
    let self = this;
    console.log(JSON.stringify(data));
    this._Client.save(data)
      .then((res) => {
        self.searchClients();
      })
  }

  remove(id) {
    let self = this;
    this._Client.remove(id)
      .then((res) => {
        self.searchClients();
      })
  }

  search() {
    console.log("query client by keyword" + this.q);
  }

  searchClients() {
    let self = this;
    this._Client
      .query(this.q)
      .then(
      (res) => self.client = res
      );
  }
}

ClientController.$inject = ['$uibModal', 'ClientService'];
export default ClientController;
