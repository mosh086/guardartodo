import SizesModule from './sizes'
import SizesController from './sizes.controller';
import SizesComponent from './sizes.component';
import SizesTemplate from './sizes.html';

describe('Sizes', () => {
  let $rootScope, makeController;

  beforeEach(window.module(SizesModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new SizesController();
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
      expect(SizesTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = SizesComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(SizesTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(SizesController);
      });
  });
});
