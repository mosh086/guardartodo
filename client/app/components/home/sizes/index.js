import angular from 'angular';
import uiRouter from 'angular-ui-router';
import sizesComponent from './sizes.component';

let sizesModule = angular.module('app.components.home.sizes', [
  uiRouter
])

.component('sizes', sizesComponent)

.name;

export default sizesModule;
