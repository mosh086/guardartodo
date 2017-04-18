import modalTemplate from './client.modal.html'
import modalInstanceCtrl from './client.modal.controller'

class ClientController {
  constructor($uibModal, $scope, $filter, toastr, ClientService, Documents) {
    "ngInject";

    this._uibModal = $uibModal;
    this._toastr = toastr;
    this._Client = ClientService;
    this._Documents = Documents;

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
          //if (err !== 'cancel') {
          //  console.log('error: ' + err);
          //  self._toastr.error(`Error ${err.message}`);
          //}
        }
      );
  }

  save(data) {
    let self = this;
    this._Client.save(data)
      .then((res) => {
        if (res.data.insertId == 0)
          self._toastr.success(`Cliente ${data.name} se actualizado correctamente`);
        else
          self._toastr.success(`Cliente ${data.name} fue creado correctamente`);
        self.searchClients();
      },
        (err) => {
          console.log('error: ' + err);
          self._toastr.error(`Error ${err.message}`);
        }
      )
  }

  remove(id, name) {
    let self = this;
    this._Client.remove(id)
      .then((res) => {
        self._toastr.success(`Cliente ${name} fue eliminado correctamente`);
        self.searchClients();
      },
        (err) =>  {
          console.log('error: ' + err);
          self._toastr.error(`Error ${err.message}`);
        }
      );
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
        (err) => {
          console.log('error: ' + err);
          self._toastr.error(`Error ${err.message}`);
        }
      );
  }

  credential(id) {
    let self = this,
      data;
    self._Documents.openCredential(data);
  }
}

export default ClientController;
