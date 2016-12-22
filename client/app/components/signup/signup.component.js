import template from './signup.html';
import controller from './signup.controller';
import './signup.scss';

let signupComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: '$ctrl'
};

export default signupComponent;
