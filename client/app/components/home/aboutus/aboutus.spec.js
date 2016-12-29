import AboutusModule from './aboutus'
import AboutusController from './aboutus.controller';
import AboutusComponent from './aboutus.component';
import AboutusTemplate from './aboutus.html';

describe('Aboutus', () => {
  let $rootScope, makeController;

  beforeEach(window.module(AboutusModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new AboutusController();
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
      expect(AboutusTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = AboutusComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(AboutusTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(AboutusController);
      });
  });
});
