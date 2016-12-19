import StoragelokertypeModule from './storagelokertype'
import StoragelokertypeController from './storagelokertype.controller';
import StoragelokertypeComponent from './storagelokertype.component';
import StoragelokertypeTemplate from './storagelokertype.html';

describe('Storagelokertype', () => {
  let $rootScope, makeController;

  beforeEach(window.module(StoragelokertypeModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new StoragelokertypeController();
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
      expect(StoragelokertypeTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = StoragelokertypeComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(StoragelokertypeTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(StoragelokertypeController);
      });
  });
});
