import TipsModule from './tips'
import TipsController from './tips.controller';
import TipsComponent from './tips.component';
import TipsTemplate from './tips.html';

describe('Tips', () => {
  let $rootScope, makeController;

  beforeEach(window.module(TipsModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new TipsController();
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
      expect(TipsTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = TipsComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(TipsTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(TipsController);
      });
  });
});
