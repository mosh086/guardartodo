import template from './payment.html';
import controller from './payment.controller';
import './payment.scss';

let paymentComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: '$ctrl'
};

export default paymentComponent;
