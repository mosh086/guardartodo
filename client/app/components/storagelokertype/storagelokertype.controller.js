import modalTemplate from './storagelokertype.modal.html'
import modalInstanceCtrl from './storagelokertype.modal.controller'

class StoragelokertypeController {
  constructor($uibModal, StoragelokertypeService) {
    this.name = 'storagelokertype';
    this.storagelokertype = [];
    this._uibModal = $uibModal;
    this._Storagelokertype = StoragelokertypeService;
  }

  $onInit() {
    console.log("initializing Storagelokertype...");
    this.searchStoragelokertypes();
  }

  $onDestroy() {
    console.log("destroying Storagelokertype...");
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
        storagelokertype: function () {
          return (id)?self._Storagelokertype.get(id):undefined;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
        //$ctrl.selected = selectedItem;
    }, function () {

    });
  }

  search() {
    console.log("query storagelokertype by keyword" + this.q);
  }

  searchStoragelokertypes() {
    let self = this;
    this._Storagelokertype
      .query(this.q)
      .then(
      (res) => self.storagelokertype = res
      );
  }
}

StoragelokertypeController.$inject = ['$uibModal','StoragelokertypeService'];
export default StoragelokertypeController;
