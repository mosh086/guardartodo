import angular from 'angular';
import uiRouter from 'angular-ui-router';
import tipsComponent from './tips.component';

let tipsModule = angular.module('app.components.home.tips', [
  uiRouter
])

.component('tips', tipsComponent)

.name;

export default tipsModule;
