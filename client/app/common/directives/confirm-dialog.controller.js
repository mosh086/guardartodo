class ModalConfirmCtrl {
  constructor($scope, $uibModalInstance, confirmClick, confirmMessge) {
    'ngInject';

    this._uibModalInstance = $uibModalInstance
    this._confirmMessage = confirmMessge;
    this._confirmClick = confirmClick;

    this._uibModalInstance.result.then((res) => {},(err) => {});
  }

  closeModal() {
    this._uibModalInstance.dismiss('cancel');
  }

  ok() {
    this._confirmClick();
    this.closeModal();
  }

  cancel() {
    this.closeModal();
  }

}

export default ModalConfirmCtrl;
