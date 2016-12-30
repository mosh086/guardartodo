import angular from 'angular';
import uiRouter from 'angular-ui-router';
import renteditComponent from './rentedit.component';

let renteditModule = angular.module('app.component.rentedit', [
  uiRouter
])

.component('rentedit', renteditComponent)

.name;

export default renteditModule;
