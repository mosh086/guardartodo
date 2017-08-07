import angular from 'angular';
import ShowAuthed from './show-authed.directive';
import Currency from './currency.directive';
import ConfirmDialog from './confirm-dialog.directive';
import ModalConfirmCtrl from './confirm-dialog.controller';
import DashboardBack from './dashboard-back.directive';
import UploadFile from './upload-file.directive';
import ValidFile from './valid-file.directive';
import UniqueStoragelokertype from './unique-storagelokertype.directive';
import UniqueStorageloker from './unique-storageloker.directive';
import UniqueUser from './unique-user.directive';
import UniquePromotion from './unique-promotion.directive';

import PaymentDialog from './payment-dialog.directive';
import ModalPaymentCtrl from './payment-dialog.controller';
import './payment-dialog.scss';

let directivesModule = angular.module('app.common.directives', [])

.directive('showAuthed', ShowAuthed)
.directive('currency', Currency)
.directive('ngConfirm', ConfirmDialog)
.directive('ngPayment', PaymentDialog)
.directive('dashboardBack', DashboardBack)
.directive('uploadFile', UploadFile)
.directive('validFile', ValidFile)
.directive('uniqueStoragelokertype', UniqueStoragelokertype)
.directive('uniqueStorageloker', UniqueStorageloker)
.directive('uniqueUser', UniqueUser)
.directive('uniquePromotion', UniquePromotion)
.controller('modalPaymentCtrl', ModalPaymentCtrl)
.controller('modalConfirmCtrl', ModalConfirmCtrl)
.name;

export default directivesModule;
