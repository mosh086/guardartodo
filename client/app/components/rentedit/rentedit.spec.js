import RenteditModule from './rentedit'
import RenteditController from './rentedit.controller';
import RenteditComponent from './rentedit.component';
import RenteditTemplate from './rentedit.html';

describe('Rentedit', () => {
  let $rootScope, makeController;

  beforeEach(window.module(RenteditModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new RenteditController();
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
      expect(RenteditTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = RenteditComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(RenteditTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(RenteditController);
      });
  });
});
