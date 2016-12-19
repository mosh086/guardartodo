import angular from 'angular';
import uiRouter from 'angular-ui-router';
import asidemenuComponent from './asidemenu.component';

let asidemenuModule = angular.module('app.common.components.asidemenu', [
  uiRouter
])

.component('gtAsidemenu', asidemenuComponent)

.name;

export default asidemenuModule;
