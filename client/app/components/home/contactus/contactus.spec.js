import ContactusModule from './contactus'
import ContactusController from './contactus.controller';
import ContactusComponent from './contactus.component';
import ContactusTemplate from './contactus.html';

describe('Contactus', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ContactusModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ContactusController();
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
      expect(ContactusTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = ContactusComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(ContactusTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ContactusController);
      });
  });
});
