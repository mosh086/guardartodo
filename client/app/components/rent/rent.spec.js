import RentModule from './rent'
import RentController from './rent.controller';
import RentComponent from './rent.component';
import RentTemplate from './rent.html';

describe('Rent', () => {
  let $rootScope, makeController;

  beforeEach(window.module(RentModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new RentController();
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
      expect(RentTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = RentComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(RentTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(RentController);
      });
  });
});
