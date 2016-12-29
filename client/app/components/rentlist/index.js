import angular from 'angular';
import uiRouter from 'angular-ui-router';
import rentlistComponent from './rentlist.component';

let rentlistModule = angular.module('app.component.rentlist', [
  uiRouter
])

.component('rentlist', rentlistComponent)

.name;

export default rentlistModule;
