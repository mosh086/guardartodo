import modalTemplate from './promotion.modal.html'
import modalInstanceCtrl from './promotion.modal.controller'

class PromotionController {
  constructor($uibModal, $scope, $filter, toastr, PromotionService) {
    "ngInject";

    this._toastr = toastr;
    this._uibModal = $uibModal;
    this._PromotionService = PromotionService;

    this._promotions = [];
    this._promotionsTemp = [];
    let self = this;
    $scope.$watch('search', function (val) {
      self._promotions = $filter('filter')(self._promotionsTemp, val);
    });
  }

  $onInit() {
    console.log("initializing Promotion...");
    this.searchPromotions();
  }

  $onDestroy() {
    console.log("destroying Promotion...");
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
        promotion: () => {
          return (id)?self._PromotionService.get(id):undefined;
        },
        promotiontypes: () => {
          return self._PromotionService.getAllPromotiontypes();
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
    this._PromotionService.save(data)
      .then((res) => {
        if (res.data.insertId == 0)
          self._toastr.success(`Promoción ${data.name} se actualizado correctamente`);
        else
          self._toastr.success(`Promoción ${data.name} fue creado correctamente`);
        self.searchPromotions();
      },
        (err) => {
          console.log('error: ' + err);
          self._toastr.error(`Error: ${err.data}`);
        }
      )
  }

  remove(id, name) {
    let self = this;
    this._PromotionService.remove(id)
      .then((res) => {
        self._toastr.success(`Promoción ${name} fue eliminado correctamente`);
        self.searchPromotions();
      },
        (err) => {
          console.log('error: ' + err);
          self._toastr.error(`Error: ${err.data}`);
        }
      )
  }

  searchPromotions() {
    let self = this;
    this._PromotionService
      .query(this.q)
      .then((res) => {
        self._promotions = res;
        self._promotionsTemp = res;
      },
        (err) => {
          console.log('error: ' + err);
          self._toastr.error(`Error: ${err.data}`);
        }
      );
  }
}

export default PromotionController;
