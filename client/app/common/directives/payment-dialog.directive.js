import ModalPaymentCtrl from './payment-dialog.controller'

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
          template: `<div class="modal-header">
                        <h3 class="modal-title">Realizar pago</h3>
                      </div>
                      <form name="pForm" id="pForm" novalidate>
                        <div class="modal-body">
                          <div class="row">
                            <div class="form-group col-md-6" ng-class="{ 'has-error': pForm.pRent.$dirty && pForm.pRent.$invalid }">
                              <label for="pRent">Renta a pagar *</label>
                              <ui-select id="pRent" name="pRent" ng-model="$ctrl._data.rent" title="Renta a pagar" ng-required="true">
                                <ui-select-match placeholder="- Selecciona -">{{$ctrl._data.rent.number}}</ui-select-match>
                                <ui-select-choices repeat="item in $ctrl._rents | orderBy:'number'">
                                  <span ng-bind-html="item.number"></span>
                                </ui-select-choices>
                              </ui-select>
                            </div>
                          </div>
                        </div>
                        <div class="modal-footer">
                          <button class="btn btn-warning" type="button" ng-click="$ctrl.cancel()">Cancel</button>
                          <button class="btn btn-primary" type="button" ng-click="$ctrl.ok()">Realizar pago</button>
                        </div>
                      </form>`,
          controller: ModalPaymentCtrl,
          controllerAs: '$ctrl',
          size: 'lg',
          windowClass: 'payment-window',
          resolve: {
            rents: function() {
              return RentService.query("active");
            },
            rent:function() {
              return RentService.get(scope.ngPaymentId);
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
