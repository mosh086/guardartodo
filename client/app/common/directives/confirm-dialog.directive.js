import ModalConfirmCtrl from './confirm-dialog.controller'

function ConfirmDialog($uibModal, toastr, StoragelokertypeService, StoragelokerService, PromotionService) {
  'ngInject';

  return {
    restrict: 'A',
    scope: {
      ngConfirmValidation: '@',
      ngConfirmMessage: '@',
      ngConfirm: '&'
    },
    link: function (scope, element) {
      element.bind('click', function () {
        let confirmObject = angular.fromJson(scope.ngConfirmValidation)
        if (confirmObject == undefined || confirmObject.validation != undefined) {
          switch(confirmObject.validation) {
              case "storagelokertype":
                StoragelokertypeService.removeValidation(confirmObject.id).then(
                  (res) => modalDialog(scope, element),
                  (err) => toastr.error(`Error: El tipo de Bodega "${err.name}" esta en uso en ${err.using} bodega${(err.using > 1)?'s':''}` )
                )
                break;
              case "storageloker":
                StoragelokerService.removeValidation(confirmObject.id).then(
                  (res) => modalDialog(scope, element),
                  (err) => toastr.error(`Error: La Bodega "${err.number}" esta rentada por ${err.clientname}` )
                )
                break;
              case "promotion":
                PromotionService.removeValidation(confirmObject.id).then(
                  (res) => modalDialog(scope, element),
                  (err) => toastr.error(`Error: La promoción "${err.name}" esta en uso en uso` )
                )
                break;
              default:
                modalDialog(scope, element);
          }
        }
      });
    }
  }

  function modalDialog(scope, element) {
    var modalInstance = $uibModal.open({
      template: `<div class="modal-header">
                    <h3 class="modal-title">{{$ctrl._confirmMessage}}</h3>
                  </div>
                  <div class="modal-footer">
                    <button class="btn btn-warning" type="button" ng-click="$ctrl.cancel()">Cancel</button>
                    <button class="btn btn-primary" type="button" ng-click="$ctrl.ok()">OK</button>
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
  }
}

export default ConfirmDialog;
