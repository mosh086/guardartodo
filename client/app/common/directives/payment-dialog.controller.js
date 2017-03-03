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

    this._payments = [];

    this._data = {
      client: client,
      payments: [],
      date: null,
      amount: null,
      comments: null
    };

    this._payment = {
      rent: rent,
      promotion: null,
      dates: null
    }

    this._uibModalInstance.result.then(() => {},(err) => {});
  }

  $onInit() {
    if (this._data.rent) {
      this.getPendingPayments(this._payment.rent.rentId);
      this.getPromotions(this._payment.rent.rentId)
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

  getRentsByClientId(id) {
    let self = this;
    this._RentService
      .getByClientId(id)
      .then((res) => {
          self._rents = res;
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
    this.getPendingPayments(selected);
    this.getPromotions(selected);
  }

  onClientSelect(selected) {
    let self = this;
    this.getRentsByClientId(selected);
  }

  addPayment() {
    let self = this;
    self._data.payments.push(self._payment);
    console.log(self._rents)
    console.log(self._payment.rent)
    self._rents = self._rents.filter(item => item.rentId !== self._payment.rent.rentId);
    self._payment = {
      rent: null,
      promotion: null,
      dates: null
    }
    self._dates = null;
    self._promotions = null;
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
