import FileModule from './file'
import FileController from './file.controller';
import FileComponent from './file.component';
import FileTemplate from './file.html';

describe('File', () => {
  let $rootScope, makeController;

  beforeEach(window.module(FileModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new FileController();
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
      expect(FileTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = FileComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(FileTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(FileController);
      });
  });
});
