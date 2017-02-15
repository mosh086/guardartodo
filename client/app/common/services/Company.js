class Company {
  constructor() {
    'ngInject';

    this._current = {
      name:"GUARDARTODO - BARRAGAN",
      address: "AV. MANUEL L. BARRAGAN #1400 COL. LAS MISIONES SANICOLAS DE LOS GARZA, N.L."
    };
  }

  getInfo() {
    return this._current;
  }

}

export default Company;




