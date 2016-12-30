import RentlistModule from './rentlist'
import RentlistController from './rentlist.controller';
import RentlistComponent from './rentlist.component';
import RentlistTemplate from './rentlist.html';

describe('Rentlist', () => {
  let $rootScope, makeController;

  beforeEach(window.module(RentlistModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new RentlistController();
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
      expect(RentlistTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = RentlistComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(RentlistTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(RentlistController);
      });
  });
});
