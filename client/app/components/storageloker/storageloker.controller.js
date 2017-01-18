import modalTemplate from './storageloker.modal.html'
import modalInstanceCtrl from './storageloker.modal.controller'

class StoragelokerController {
  constructor($uibModal, $scope, $filter, $timeout, toastr, StoragelokerService, StoragelokertypeService) {
    "ngInject";

    this._uibModal = $uibModal;
    this._toastr = toastr;
    this._Storageloker = StoragelokerService;
    this._Storagelokertypes = StoragelokertypeService;

    this.storageloker = [];
    this.storagelokertype = [];
    this.storagelokerTemp = [];
    let self = this;
    $scope.$watch('search', function (val) {
      self.storageloker = $filter('filter')(self.storagelokerTemp, val);
    });


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
          //if (err !== 'cancel') {
          //  console.log('error: ' + err);
          //  self._toastr.error(`Error ${err.message}`);
          //}
        }
      );
  }

  save(data) {
    let self = this;
    this._Storageloker.save(data)
      .then((res) => {
        if (res.data.insertId == 0)
          self._toastr.success(`Bodega ${data.number} se actualizado correctamente`);
        else
          self._toastr.success(`Bodega ${data.number} fue creada correctamente`);
        self.searchStoragelokers();
      },
        (err) => {
          console.log('error: ' + err);
          self._toastr.error(`Error ${err.message}`);
        }
      )
  }

  remove(id) {
    let self = this;
    this._Storageloker.remove(id)
      .then((res) => {
        self._toastr.success(`Bodega ${name} fue eliminada correctamente`);
        self.searchStoragelokers();
      },
        (err) => {
          console.log('error: ' + err);
          self._toastr.error(`Error ${err.message}`);
        }
      )
  }

  search() {
    console.log("query storageloker by keyword" + this.q);
  }

  searchStoragelokers() {
    let self = this;
    this._Storageloker
      .query(this.q)
      .then((res) => {
        self.storageloker = res;
        self.storagelokerTemp = res;
      },
        (err) => {
          console.log('error: ' + err);
          self._toastr.error(`Error ${err.message}`);
        }
      );
  }

  searchStoragelokertypes() {
    let self = this;
    this._Storagelokertypes
      .query(this.q)
      .then((res) => self.storagelokertype = res,
        (err) => {
          console.log('error: ' + err);
          self._toastr.error(`Error ${err.message}`);
        }
      );
  }

}

export default StoragelokerController;
