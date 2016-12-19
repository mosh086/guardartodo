import angular from 'angular';
import Menu from './menu';
import Footer from './footer';
import Asidemenu from './asidemenu';

let commonComponentsModule = angular.module('app.common.components', [
  Menu,
  Footer,
  Asidemenu
])

.name;

export default commonComponentsModule;
