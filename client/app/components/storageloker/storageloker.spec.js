import StoragelokerModule from './storageloker'
import StoragelokerController from './storageloker.controller';
import StoragelokerComponent from './storageloker.component';
import StoragelokerTemplate from './storageloker.html';

describe('Storageloker', () => {
  let $rootScope, makeController;

  beforeEach(window.module(StoragelokerModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new StoragelokerController();
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
      expect(StoragelokerTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = StoragelokerComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(StoragelokerTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(StoragelokerController);
      });
  });
});
