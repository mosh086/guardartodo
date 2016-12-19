import template from './menu.html';
import controller from './menu.controller';
import './menu.scss';

let menuComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs:'$ctrl'
};

export default menuComponent;
