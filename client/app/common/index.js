import angular from 'angular';
import commonComponentsModule from './components/';
import commonServicesModule from './services';
import commonDirectivesModule from './directives';
import commonConstantsModule from './constants';

let commonModule = angular.module('app.common', [
  commonComponentsModule,
  commonServicesModule,
  commonDirectivesModule,
  commonConstantsModule
])
.name;

export default commonModule;
