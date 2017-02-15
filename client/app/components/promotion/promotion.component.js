import template from './promotion.html';
import controller from './promotion.controller';
import './promotion.scss';

let promotionComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: '$ctrl'
};

export default promotionComponent;
