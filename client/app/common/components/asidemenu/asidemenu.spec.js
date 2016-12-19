import AsidemenuModule from './asidemenu'
import AsidemenuController from './asidemenu.controller';
import AsidemenuComponent from './asidemenu.component';
import AsidemenuTemplate from './asidemenu.html';

describe('Asidemenu', () => {
  let $rootScope, makeController;

  beforeEach(window.module(AsidemenuModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new AsidemenuController();
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
      expect(AsidemenuTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = AsidemenuComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(AsidemenuTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(AsidemenuController);
      });
  });
});
