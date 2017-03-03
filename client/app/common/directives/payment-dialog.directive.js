import ModalPaymentCtrl from './payment-dialog.controller'
import template from './payment-dialog.html';

function PaymentDialog($uibModal, RentService, ClientService) {
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
            clients: function() {
              return ClientService.query();
            },
            rent:function() {
              return scope.ngPaymentId ? RentService.get(scope.ngPaymentId): null;
            },
            client:function() {
              return null;
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
