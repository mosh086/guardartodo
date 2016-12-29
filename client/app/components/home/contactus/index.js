import angular from 'angular';
import uiRouter from 'angular-ui-router';
import contactusComponent from './contactus.component';

let contactusModule = angular.module('app.components.home.contactus', [
  uiRouter
])

.component('contactus', contactusComponent)

.name;

export default contactusModule;
