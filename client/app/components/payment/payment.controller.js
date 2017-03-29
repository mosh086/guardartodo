class PaymentController {
  constructor($scope, $filter, toastr, PaymentService) {
    "ngInject";

    this._toastr = toastr;
    this._PaymentService = PaymentService;

    this._payments = [];
    this._paymentsTemp = [];
    let self = this;
    $scope.$watch('search', function (val) {
      self._payments = $filter('filter')(self._paymentsTemp, val);
    });
  }

  $onInit() {
    console.log("initializing Client...");
    this.searchPayments();
  }

  $onDestroy() {
    console.log("destroying Client...");
  }

  save(data) {
    let self = this;

  }

  remove(id, name) {
    let self = this;

  }

  searchPayments() {
    let self = this;
    this._PaymentService
      .query(this.q)
      .then((res) => {
        self._payments = res;
        self._paymentsTemp = res;
      },
        (err) => {
          console.log('error: ' + err);
          self._toastr.error(`Error ${err.message}`);
        }
      );
  }
}

export default PaymentController;
