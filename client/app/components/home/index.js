import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './home.component';
import aboutus from './aboutus';
import carousel from './carousel';
import marketing from './marketing';
import sizes from './sizes';
import contactus from './contactus';
import tips from './tips';
import confirm from './confirm';

let homeModule = angular.module('app.components.home', [
  uiRouter,
  aboutus,
  carousel,
  marketing,
  sizes,
  contactus,
  tips,
  confirm
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
