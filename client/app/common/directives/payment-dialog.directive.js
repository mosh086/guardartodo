import ModalPaymentCtrl from './payment-dialog.controller'
import template from './payment-dialog.html';

function PaymentDialog($uibModal, RentService) {
  'ngInject';

  return {
    restrict: 'A',
    scope: {
      ngPaymentId: '@'
      //ngConfirmMessage: '@',
      //ngConfirm: '&'
    },
    link: function (scope, element) {
      element.bind('click', function () {
        var modalInstance = $uibModal.open({
          template,
          controller: ModalPaymentCtrl,
          controllerAs: '$ctrl',
          size: 'lg',
          windowClass: 'payment-window',
          resolve: {
            rents: function() {
              return RentService.query("active");
            },
            rent:function() {
              return scope.ngPaymentId ? RentService.get(scope.ngPaymentId): null;
            }
            /*confirmClick: function () {
              return scope.ngConfirm;
            },
            confirmMessge: function () {
              return scope.ngConfirmMessage;
            }*/
          }
        });
      });
    }
  }
}

export default PaymentDialog;
