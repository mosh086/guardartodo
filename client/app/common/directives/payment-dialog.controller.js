class ModalPaymentCtrl {
  constructor($scope, $uibModalInstance, rent, client, clients, RentService, MethodOfPayment) {
    'ngInject';

    this._uibModalInstance = $uibModalInstance;
    this._RentService = RentService;

    this._clients = clients;
    this._rents = null;
    this._dates = null;
    this._promotions = null;
    this._methodpayments = MethodOfPayment;
    this._data = {
      rent: rent,
      client: client,
      promotion: null,
      dates: null,
      date: null,
      amount: null
    };
    this._uibModalInstance.result.then(() => {},(err) => {});
  }

  $onInit() {
    if (this._data.rent) {
      this.getPendingPayments(this._data.rent.rentId);
      this.getPromotions(this._data.rent.rentId)
    } else {

    }
  }

  getPendingPayments(id) {
    let self = this;
    this._RentService
        .getPendingPayments(id)
        .then((res) => {
          self._dates = res;
        },
          (err) => {
            console.log('error: ' + err);
            self._toastr.error(`Error ${err.message}`);
          }
        );
  }

  getPromotions(id) {
    let self = this;
    this._RentService
        .getPromotions(id)
        .then((res) => {
          console.log(res)
          self._promotions = res;
        },
          (err) => {
            console.log('error: ' + err);
            self._toastr.error(`Error ${err.message}`);
          }
        );
  }

  onRentSelect(selected) {
    let self = this;
    self._data.date = null;
    this.getPendingPayments(selected);
    this.getPromotions(selected)
  }

  closeModal() {
    this._uibModalInstance.dismiss('cancel');
  }

  ok() {
    this.closeModal();
  }

  cancel() {
    this.closeModal();
  }

}

export default ModalPaymentCtrl;
