import modalTemplate from './storagelokertype.modal.html'
import modalInstanceCtrl from './storagelokertype.modal.controller'

class StoragelokertypeController {
  constructor($uibModal, $scope, $filter, toastr, StoragelokertypeService) {
    "ngInject";

    this._uibModal = $uibModal;
    this._toastr = toastr;
    this._Storagelokertype = StoragelokertypeService;

    this._storagelokertype = [];
    this._storagelokertypeTemp = [];
    let self = this;
    $scope.$watch('search', function (val) {
      self._storagelokertype = $filter('filter')(self._storagelokertypeTemp, val);
    });
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

    modalInstance.result
    .then((data) => self.save(data),
      (err) => {
        //if (err !== 'cancel')
        //  self._toastr.error(`Error ${err.message}`);
      }
    );
  }

  save(data) {
    let self = this;
    this._Storagelokertype.save(data)
      .then((res) => {
        if (res.data.insertId == 0)
          self._toastr.success(`Tipo de bodega ${data.name} se actualizado correctamente`);
        else
          self._toastr.success(`Tipo de bodega ${data.name} fue creado correctamente`);
        self.searchStoragelokertypes();
      },
        (err) => {
          console.log('error: ' + err);
          self._toastr.error(`Error: ${err.data}`);
        }
    );
  }

  remove(id, name) {
    let self = this;
    this._Storagelokertype.remove(id)
      .then((res) => {
        self._toastr.success(`Tipo de bodega ${name} fue eliminado correctamente`);
        self.searchStoragelokertypes();
      },
        (err) => {
          console.log('error: ' + err);
          self._toastr.error(`Error: ${err.data}`);
        }
    );
  }

  searchStoragelokertypes() {
    let self = this;
    this._Storagelokertype
      .query(this.q)
      .then((res) => {
        self._storagelokertype = res;
        self._storagelokertypeTemp = res;
      },
        (err) => {
          console.log('error: ' + err);
          self._toastr.error(`Error: ${err.data}`);
        });
  }

}

export default StoragelokertypeController;
