import PaymentModule from './payment'
import PaymentController from './payment.controller';
import PaymentComponent from './payment.component';
import PaymentTemplate from './payment.html';

describe('Payment', () => {
  let $rootScope, makeController;

  beforeEach(window.module(PaymentModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new PaymentController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(PaymentTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = PaymentComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(PaymentTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(PaymentController);
      });
  });
});
