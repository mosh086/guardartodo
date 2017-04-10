import lodash from 'lodash';

class ModalPaymentCtrl {
  constructor($uibModalInstance, rent, client, clients, toastr, $q, $scope, PaymentService, RentService, MethodOfPayment, Documents) {
    'ngInject';

    this._uibModalInstance = $uibModalInstance;
    this._RentService = RentService;
    this._PaymentService = PaymentService;
    this._Documents = Documents;
    this._toastr = toastr;
    this._$q = $q;
    this._scope = $scope;

    this._clients = clients;
    this._rents = null;
    this._dates = null;
    this._promotions = null;
    this._methodpayments = MethodOfPayment;
    this._rentSelectedDisabled = false;
    this._rentSelected = rent;
    this._payments = [];
    this._invalidNumPayment = false;

    this._data = {
      client: client,
      payments: [],
      methodpayment: null,
      transaction: null,
      amount: null,
      comments: null
    };

    this._payment = {
      rent: null,
      promotion: null,
      date: null
    }
    this._payment.rent = Object.assign({}, rent)

    this._uibModalInstance.result.then(() => {},(err) => {});
  }

  $onInit() {
    if (this._rentSelected) {
      this._rentSelectedDisabled = true;
      this._rents = [];
      this._rents.push(this._payment.rent);
      this.getPendingPayments(this._payment.rent.rentId);
      this.getPromotions(this._payment.rent.rentId)
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
    this._dates = null;
    this._promotions = null;
    this._payment = {
      rent: this._payment.rent,
      promotion: null,
      date: null
    }
    this.getPendingPayments(selected);
    this.getPromotions(selected);
  }

  onClientSelect(selected) {
    this.clean();
    this.getRentsByClientId(selected);
  }

  addPayment() {
    let self = this;
    self.isValid().then(
      (res) => {
        self._data.payments.push(self._payment);
        if (self._payment.promotion) {
          if (self._payment.promotion.amount && self._payment.promotion.amount > 0) {
            _.each(self._data.payments, function(item, idx){
              if(item.rent.rentId == self._payment.rent.rentId && item.date.date == self._payment.date.date){
                self._data.payments[idx].rent.total = self._payment.rent.total - self._payment.promotion.amount;
                return false;
              }
            });
          } else if (self._payment.promotion.percentage && self._payment.promotion.percentage > 0) {
            _.each(self._data.payments, function(item, idx){
              if(item.rent.rentId == self._payment.rent.rentId && item.date.date == self._payment.date.date){
                self._data.payments[idx].rent.total = self._payment.rent.total - (self._payment.promotion.percentage / 100 ) * self._payment.rent.total;
                return false;
              }
            });
          }
        }
        self.clean();
      }, (err)=> {
        switch(err) {
          case 1:
            self._toastr.error(`Error: Ya has agregado el pago del mes / bodega`);
            break;
          case 2:
            self._toastr.error(`Error: Ya has agregado la promocion / bodega`);
            break;
          default:
            self._toastr.error(`Error`);
        }
      });
      //self._rents = self._rents.filter(item => item.rentId !== self._payment.rent.rentId);
  }

  clean() {
    if (this._rentSelected) {
      this._payment = {
        rent: Object.assign({}, this._rentSelected),
        promotion: null,
        date: null
      }
    } else {
      this._payment = {
        rent: null,
        promotion: null,
        date: null
      }
      this._dates = null;
      this._promotions = null;
    }

    angular.forEach(this._scope.pForm, function(value, key) {
         if (typeof value === 'object' && value.hasOwnProperty('$modelValue'))
             value.$setPristine();
     });
  }

  isValid() {
    let self = this,
        deferred = this._$q.defer();
    _.forEach(self._data.payments, function(value) {
      if (self._payment.rent.rentId == value.rent.rentId &&
          self._payment.date.id == value.date.id) {
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

  save() {
    let self = this;
    self._data.transaction = new Date();
    this._PaymentService.save(self._data)
      .then((res) => {
        this._Documents.openPayment(self._data);
        this._uibModalInstance.close('cancel');
      }, (err) => {

      })

  }

  validatePayment() {
    angular.forEach(this._scope.pForm, function(value, key) {
      if (typeof value === 'object' && value.hasOwnProperty('$modelValue'))
        value.$setDirty();
    });
    return true;
  }

  validate() {
    this._invalidNumPayment = false;
    angular.forEach(this._scope.pForm2, function(value, key) {
      if (typeof value === 'object' && value.hasOwnProperty('$modelValue'))
        value.$setDirty();
    });

    if (!(this._data.payments && this._data.payments.length > 0)) {
      this._invalidNumPayment = true;
      return false;
    }
    return true;
  }

  cancel() {
    this.closeModal();
  }

}

export default ModalPaymentCtrl;
