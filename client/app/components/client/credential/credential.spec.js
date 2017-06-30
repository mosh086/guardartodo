import CredentialModule from './credential'
import CredentialController from './credential.controller';
import CredentialComponent from './credential.component';
import CredentialTemplate from './credential.html';

describe('Credential', () => {
  let $rootScope, makeController;

  beforeEach(window.module(CredentialModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new CredentialController();
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
      expect(CredentialTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = CredentialComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(CredentialTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(CredentialController);
      });
  });
});
