import template from './asidemenu.html';
import controller from './asidemenu.controller';
import './asidemenu.scss';

let asidemenuComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs:'$ctrl'
};

export default asidemenuComponent;
