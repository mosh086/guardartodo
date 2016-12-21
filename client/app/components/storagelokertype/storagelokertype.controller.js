import modalTemplate from './storagelokertype.modal.html'
import modalInstanceCtrl from './storagelokertype.modal.controller'

class StoragelokertypeController {
  constructor($uibModal, StoragelokertypeService) {
    this._name = 'storagelokertype';
    this._storagelokertype = [];
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

    modalInstance.result.then(function (data) {
      self.save(data);
    }, function () {

    });
  }

  save(data) {
    console.log('2');
    let self = this;
    this._Storagelokertype.save(data)
      .then((res) => {
        self.searchStoragelokertypes();
      })
  }

  remove(id) {
    let self = this;
    this._Storagelokertype.remove(id)
      .then((res) => {
        self.searchStoragelokertypes();
      })
  }

  search() {
    console.log("query storagelokertype by keyword" + this.q);
  }

  searchStoragelokertypes() {
    let self = this;
    this._Storagelokertype
      .query(this.q)
      .then((res) => self._storagelokertype = res);
  }

}

StoragelokertypeController.$inject = ['$uibModal', 'StoragelokertypeService'];
export default StoragelokertypeController;
