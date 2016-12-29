import angular from 'angular';
import uiRouter from 'angular-ui-router';
import aboutusComponent from './aboutus.component';

let aboutusModule = angular.module('app.components.home.aboutus', [
  uiRouter
])

.component('aboutus', aboutusComponent)

.name;

export default aboutusModule;
