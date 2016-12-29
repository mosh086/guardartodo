import angular from 'angular';
import uiRouter from 'angular-ui-router';
import carouselComponent from './carousel.component';

let carouselModule = angular.module('app.components.home.carousel', [
  uiRouter
])

.component('carousel', carouselComponent)

.name;

export default carouselModule;
