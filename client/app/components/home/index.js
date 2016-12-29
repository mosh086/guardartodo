import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './home.component';
import aboutus from './aboutus';
import carousel from './carousel';
import marketing from './marketing';
import contactus from './contactus';

let homeModule = angular.module('app.components.home', [
  uiRouter,
  aboutus,
  carousel,
  marketing,
  contactus
])
.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('home', {
      url: '/',
      component: 'home',
      data: {
        requiresAuth: false
      }
  });
})
.component('home', homeComponent)

.name;

export default homeModule;
