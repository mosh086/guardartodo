import lodash from 'lodash';

class ModalPaymentCtrl {
  constructor($uibModalInstance, rent, client, clients, toastr, $q, RentService, MethodOfPayment, Documents) {
    'ngInject';

    this._uibModalInstance = $uibModalInstance;
    this._RentService = RentService;
    this._Documents = Documents;
    this._toastr = toastr;
    this._$q = $q;

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
      date: null
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
    self._dates = null;
    self._promotions = null;
    this.getPendingPayments(selected);
    this.getPromotions(selected);
  }

  onClientSelect(selected) {
    let self = this;
    self.clean();
    console.log(selected);
    this.getRentsByClientId(selected);
  }

  addPayment() {
    let self = this;

    self.isValid().then(
      (res) => {
        console.log(res)
        self._data.payments.push(self._payment);
        self.clean();
      }, (err)=> {
        switch(err) {
          case 1:
            self._toastr.error(`Error ${err.message}`);
            break;
          case 2:
            self._toastr.error(`Ya has seleccionado la promocion de la bodega`);
            break;
          default:
            self._toastr.error(`Error`);

        }
        console.log(err);
      })

      //self._rents = self._rents.filter(item => item.rentId !== self._payment.rent.rentId);
  }

  clean() {
    let self = this;
    self._payment = {
      rent: null,
      promotion: null,
      date: null
    }
    self._dates = null;
    self._promotions = null;
  }

  isValid() {
    let self = this,
        deferred = self._$q.defer();

    _.forEach(self._data.payments, function(value) {
      console.log(self._payment.date);
      console.log(value.date);
      if (self._payment.rent.rentId == value.rent.rentId && self._payment.date.id == value.date.id) {
        deferred.reject(1);
      }
      if (self._payment.rent.rentId == value.rent.rentId &&
          self._payment.promotion != null && value.promotion != null &&
          self._payment.promotion.promotionId == value.promotion.promotionId) {
        deferred.reject(2);
      }
    });
    deferred.resolve(0);
    return deferred.promise;
  }

  closeModal() {
    this._uibModalInstance.dismiss('cancel');
  }

  ok() {
    let self = this;
    self._Documents.openPayment(self._data);
    this.closeModal();
  }

  cancel() {
    this.closeModal();
  }

}

export default ModalPaymentCtrl;
