import angular from 'angular';
import uiRouter from 'angular-ui-router';
import paymentComponent from './payment.component';

let paymentModule = angular.module('payment', [
  uiRouter
])
.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('payment', {
      url: '/payment',
      component: 'payment',
      data: {
        requiresAuth: true
      }
    });
})
.component('payment', paymentComponent)

.name;

export default paymentModule;
