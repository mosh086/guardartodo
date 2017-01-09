import modalTemplate from './storageloker.modal.html'
import modalInstanceCtrl from './storageloker.modal.controller'

class StoragelokerController {
  constructor($uibModal, StoragelokerService, StoragelokertypeService) {
    "ngInject";

    this._uibModal = $uibModal;
    this._Storageloker = StoragelokerService;
    this._Storagelokertypes = StoragelokertypeService;

    this.storageloker = [];
    this.storagelokertype = [];
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
        storageloker: () => {
          return (id)?self._Storageloker.get(id):undefined;
        },
        storagelokertypes: () => {
          return self.storagelokertype;
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
    this._Storageloker.save(data)
      .then((res) => self.searchStoragelokers(),
        (err) => console.log('error: ' + err)
      )
  }

  remove(id) {
    let self = this;
    this._Storageloker.remove(id)
      .then((res) => self.searchStoragelokers(),
        (err) => console.log('error: ' + err)
      )
  }

  search() {
    console.log("query storageloker by keyword" + this.q);
  }

  searchStoragelokers() {
    let self = this;
    this._Storageloker
      .query(this.q)
      .then((res) => self.storageloker = res,
        (err) => console.log('error: ' + err)
      );
  }

  searchStoragelokertypes() {
    let self = this;
    this._Storagelokertypes
      .query(this.q)
      .then((res) => self.storagelokertype = res,
        (err) => console.log('error: ' + err)
      );
  }

}

export default StoragelokerController;
