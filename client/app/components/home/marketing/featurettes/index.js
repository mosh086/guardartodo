import angular from 'angular';
import uiRouter from 'angular-ui-router';
import featurettesComponent from './featurettes.component';

let featurettesModule = angular.module('app.components.home.marketing.featurettes', [
  uiRouter
])

.component('featurettes', featurettesComponent)

.name;

export default featurettesModule;
