import modalTemplate from './storagelokertype.modal.html'
import modalInstanceCtrl from './storagelokertype.modal.controller'

class StoragelokertypeController {
  constructor($uibModal, $scope, $filter, StoragelokertypeService) {
    "ngInject";

    this._uibModal = $uibModal;
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
        if (err !== 'cancel')
          console.log('error: ' + err);
      }
    );
  }

  save(data) {
    let self = this;
    this._Storagelokertype.save(data)
      .then((res) => self.searchStoragelokertypes(),
        (err) => console.log('error: ' + err)
    );
  }

  remove(id) {
    let self = this;
    this._Storagelokertype.remove(id)
      .then((res) => self.searchStoragelokertypes(),
        (err) => console.log('error: ' + err)
    );
  }

  search() {
    console.log("query storagelokertype by keyword" + this.q);
  }

  searchStoragelokertypes() {
    let self = this;
    this._Storagelokertype
      .query(this.q)
      .then((res) => {
        self._storagelokertype = res;
        self._storagelokertypeTemp = res;
      });
  }

}

export default StoragelokertypeController;
