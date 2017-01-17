import ModalConfirmCtrl from './confirm-dialog.controller'

function ConfirmDialog($uibModal) {
  'ngInject';

  return {
    restrict: 'A',
    scope: {
      ngConfirmMessage: '@',
      ngConfirm: '&'
    },
    link: function (scope, element) {
      element.bind('click', function () {
        console.log('resf');
        var modalInstance = $uibModal.open({
          template: `<div class="modal-header">
                        <h3 class="modal-title">{{$ctrl._confirmMessage}}</h3>
                      </div>
                      <div class="modal-footer">
                        <button class="btn btn-primary" type="button" ng-click="$ctrl.ok()">OK</button>
                        <button class="btn btn-warning" type="button" ng-click="$ctrl.cancel()">Cancel</button>
                      </div>`,
          controller: ModalConfirmCtrl,
          controllerAs: '$ctrl',
          size: 'sm',
          windowClass: 'confirm-window',
          resolve: {
            confirmClick: function () {
              return scope.ngConfirm;
            },
            confirmMessge: function () {
              return scope.ngConfirmMessage;
            }
          }
        });
      });
    }
  }
}

export default ConfirmDialog;
