import MarketingModule from './marketing'
import MarketingController from './marketing.controller';
import MarketingComponent from './marketing.component';
import MarketingTemplate from './marketing.html';

describe('Marketing', () => {
  let $rootScope, makeController;

  beforeEach(window.module(MarketingModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new MarketingController();
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
      expect(MarketingTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = MarketingComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(MarketingTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(MarketingController);
      });
  });
});
