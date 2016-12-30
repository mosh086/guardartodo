import ResetpasswordModule from './resetpassword'
import ResetpasswordController from './resetpassword.controller';
import ResetpasswordComponent from './resetpassword.component';
import ResetpasswordTemplate from './resetpassword.html';

describe('Resetpassword', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ResetpasswordModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ResetpasswordController();
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
      expect(ResetpasswordTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = ResetpasswordComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(ResetpasswordTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ResetpasswordController);
      });
  });
});
