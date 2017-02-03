import angular from 'angular';
import ShowAuthed from './show-authed.directive';
import Currency from './currency.directive';
import ConfirmDialog from './confirm-dialog.directive';
import ModalConfirmCtrl from './confirm-dialog.controller';
import DashboardBack from './dashboard-back.directive';

let directivesModule = angular.module('app.common.directives', [])

.directive('showAuthed', ShowAuthed)
.directive('currency', Currency)
.directive('ngConfirm', ConfirmDialog)
.directive('dashboardBack', DashboardBack)
.controller('modalConfirmCtrl', ModalConfirmCtrl)
.name;

export default directivesModule;
