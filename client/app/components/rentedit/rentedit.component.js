import template from './rentedit.html';
import controller from './rentedit.controller';
import './rentedit.scss';

let renteditComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: '$ctrl'
};

export default renteditComponent;
