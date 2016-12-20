import modalTemplate from './storageloker.modal.html'
import modalInstanceCtrl from './storageloker.modal.controller'

class StoragelokerController {
  constructor($uibModal, StoragelokerService) {
    this.name = 'storageloker';
    this.storageloker = [];
    this._uibModal = $uibModal;
    this._Storageloker = StoragelokerService;
  }

  $onInit() {
    console.log("initializing Storageloker...");
    this.searchStoragelokers();
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
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
        //$ctrl.selected = selectedItem;
    }, function () {

    });
  }

  search() {
    console.log("query storageloker by keyword" + this.q);
  }

  searchStoragelokers() {
    let self = this;
    this._Storageloker
      .query(this.q)
      .then(
      (res) => self.storageloker = res
      );
  }

}

StoragelokerController.$inject = ['$uibModal', 'StoragelokerService'];
export default StoragelokerController;
