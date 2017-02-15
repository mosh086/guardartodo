class ModalPaymentCtrl {
  constructor($scope, $uibModalInstance, rent, rents) {
    'ngInject';

    this._uibModalInstance = $uibModalInstance;
    console.log(rent)
    this._rents = rents;
    this._data = {
      rent: rent,
      promotion: {},
      dates: {},
      date: null,
      amount: null
    };
    this._uibModalInstance.result.then(() => {},(err) => {});
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
