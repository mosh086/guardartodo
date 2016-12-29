import angular from 'angular';
import uiRouter from 'angular-ui-router';
import marketingComponent from './marketing.component';
import featurettes from './featurettes'
let marketingModule = angular.module('app.components.home.marketing', [
  uiRouter,
  featurettes
])

.component('marketing', marketingComponent)

.name;

export default marketingModule;
