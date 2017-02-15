import PromotionModule from './promotion'
import PromotionController from './promotion.controller';
import PromotionComponent from './promotion.component';
import PromotionTemplate from './promotion.html';

describe('Promotion', () => {
  let $rootScope, makeController;

  beforeEach(window.module(PromotionModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new PromotionController();
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
      expect(PromotionTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = PromotionComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(PromotionTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(PromotionController);
      });
  });
});
