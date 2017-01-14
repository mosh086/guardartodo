import modalTemplate from './client.modal.html'
import modalInstanceCtrl from './client.modal.controller'

class ClientController {
  constructor($uibModal, $scope, $filter, ClientService) {
    "ngInject";

    this._uibModal = $uibModal;
    this._Client = ClientService;

    this._clients = [];
    this._clientsTemp = [];
    let self = this;
    $scope.$watch('search', function (val) {
      self._clients = $filter('filter')(self._clientsTemp, val);
    });
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
        client: () => {
          return (id)?self._Client.get(id):undefined;
        }
      }
    });

    modalInstance.result
      .then((data) => self.save(data),
        (err) => {
          if (err !== 'cancel')
            console.log('error: ' + err);
        }
      );
  }

  save(data) {
    let self = this;
    this._Client.save(data)
      .then((res) => self.searchClients(),
        (err) => console.log('error: ' + err)
      )
  }

  remove(id) {
    let self = this;
    this._Client.remove(id)
      .then((res) => self.searchClients(),
        (err) => console.log('error: ' + err)
      )
  }

  search() {
    console.log("query client by keyword" + this.q);
  }

  searchClients() {
    let self = this;
    this._Client
      .query(this.q)
      .then((res) => {
        self._clients = res;
        self._clientsTemp = res;
      },
        (err) => console.log('error: ' + err)
      );
  }
}

export default ClientController;
