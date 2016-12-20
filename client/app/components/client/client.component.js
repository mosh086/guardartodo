import template from './client.html';
import controller from './client.controller';
import './client.scss';

let clientComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: '$ctrl'
};

export default clientComponent;
