import angular from 'angular';
import commonComponentsModule from './components/';
import commonServicesModule from './services';
import commonDirectivesModule from './directives';
import commonConstantsModule from './constants';
import commonFiltersModule from './filters';

let commonModule = angular.module('app.common', [
  commonComponentsModule,
  commonDirectivesModule,
  commonServicesModule,
  commonConstantsModule,
  commonFiltersModule
])
.name;

export default commonModule;
