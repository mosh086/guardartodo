class Company {
  constructor() {
    'ngInject';

    this._current = {
      name:"GuardarTodo - Barragan",
      address: "Av. Manuel L. Barragán #1400, Col. las Misiones San Nicolas de los Garza, N.L."
    };
  }

  getInfo() {
    return this._current;
  }

}

export default Company;




