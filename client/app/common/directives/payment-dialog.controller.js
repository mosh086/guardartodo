class ModalPaymentCtrl {
  constructor($scope, $uibModalInstance, rent, client, clients, RentService, MethodOfPayment) {
    'ngInject';

    this._uibModalInstance = $uibModalInstance;
    this._RentService = RentService;
    this.scope = $scope;

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
    self._dates = null;
    self._promotions = null;
    console.log(self.scope);
    self.scope.pForm.pMonth.$$element = [];
    /*var $example = $(".js-example-programmatic").select2();
var $exampleMulti = $(".js-example-programmatic-multi").select2();

$(".js-programmatic-set-val").on("click", function () { $example.val("CA").trigger("change"); });

$(".js-programmatic-open").on("click", function () { $example.select2("open"); });
$(".js-programmatic-close").on("click", function () { $example.select2("close"); });

$(".js-programmatic-init").on("click", function () { $example.select2(); });
$(".js-programmatic-destroy").on("click", function () { $example.select2("destroy"); });

$(".js-programmatic-multi-set-val").on("click", function () { $exampleMulti.val(["CA", "AL"]).trigger("change"); });
$(".js-programmatic-multi-clear").on("click", function () { $exampleMulti.val(null).trigger("change"); });*/
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
