import modalTemplate from './storageloker.modal.html'
import modalInstanceCtrl from './storageloker.modal.controller'

class StoragelokerController {
  constructor($uibModal, StoragelokerService, StoragelokertypeService) {
    this.name = 'storageloker';
    this.storageloker = [];
    this.storagelokertype = [];
    this._uibModal = $uibModal;
    this._Storageloker = StoragelokerService;
    this._Storagelokertypes = StoragelokertypeService;
  }

  $onInit() {
    console.log("initializing Storageloker...");
    this.searchStoragelokers();
    this.searchStoragelokertypes();
  }

  $onDestroy() {
    console.log("destroying Storageloker...");
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
        storageloker: function () {
          return (id)?self._Storageloker.get(id):undefined;
        },
        storagelokertypes: function () {
          return self.storagelokertype;
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
    this._Storageloker.save(data)
      .then((res) => {
        self.searchStoragelokers();
      })
  }

  remove(id) {
    let self = this;
    this._Storageloker.remove(id)
      .then((res) => {
        self.searchStoragelokers();
      })
  }

  search() {
    console.log("query storageloker by keyword" + this.q);
  }

  searchStoragelokers() {
    let self = this;
    this._Storageloker
      .query(this.q)
      .then((res) => self.storageloker = res);
  }

  searchStoragelokertypes() {
    let self = this;
    this._Storagelokertypes
      .query(this.q)
      .then((res) => self.storagelokertype = res);
  }

}

StoragelokerController.$inject = ['$uibModal', 'StoragelokerService', 'StoragelokertypeService'];
export default StoragelokerController;
