import angular from 'angular';
import uiRouter from 'angular-ui-router';
import menuComponent from './menu.component';

let menuModule = angular.module('app.common.components.menu', [
  uiRouter
])

.component('gtMenu', menuComponent)

.name;

export default menuModule;
