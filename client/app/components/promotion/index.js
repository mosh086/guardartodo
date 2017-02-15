import angular from 'angular';
import uiRouter from 'angular-ui-router';
import promotionComponent from './promotion.component';
import promotionModal from './promotion.modal.controller';

let promotionModule = angular.module('app.components.promotion', [
  uiRouter
])
.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('promotion', {
      url: '/promotion',
      component: 'promotion',
      data: {
        requiresAuth: true
      }
    });
})
.component('promotion', promotionComponent)
.controller('promotionModal',promotionModal)
.name;

export default promotionModule;
