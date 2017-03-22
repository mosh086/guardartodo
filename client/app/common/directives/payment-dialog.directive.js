import ModalPaymentCtrl from './payment-dialog.controller'
import template from './payment-dialog.html';

function PaymentDialog($uibModal, RentService, ClientService) {
  'ngInject';

  return {
    restrict: 'A',
    scope: {
      ngPaymentId: '@',
      ngClientId: '@',
      //ngConfirmMessage: '@',
      ngRefresh: '&'
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
              return scope.ngClientId ? ClientService.get(scope.ngClientId): null;
            }
          }
        });

      modalInstance.result
        .then((data) => { console.log('dsfsdfsdfasdf asdgf adsvdv'); scope.ngRefresh()},
          (err) => { }
        );
      });
    }
  }
}

export default PaymentDialog;
