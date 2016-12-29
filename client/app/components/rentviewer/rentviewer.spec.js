import RentviewerModule from './rentviewer'
import RentviewerController from './rentviewer.controller';
import RentviewerComponent from './rentviewer.component';
import RentviewerTemplate from './rentviewer.html';

describe('Rentviewer', () => {
  let $rootScope, makeController;

  beforeEach(window.module(RentviewerModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new RentviewerController();
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
      expect(RentviewerTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = RentviewerComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(RentviewerTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(RentviewerController);
      });
  });
});
