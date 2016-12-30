class RentController {
  constructor(ClientService, StoragelokerService, StoragelokertypeService) {
    "ngInject";

    this.name = 'rent';
    this._storagelokertype = {};
    this._storagelokers = [];
    this._clients = [];
    this._selectStorageloker = null;
    this._selectClient = null;

    this._Client = ClientService;
    this._Storageloker = StoragelokerService;
    this._StoragelokertypeService = StoragelokertypeService;
    this._data = { clientId: null, storagelokerId: null, date: "", cost: 0.00, extra: 0.00, iva: 0.00, total:0.00}

    this._dateOptions = {
      dateDisabled: function (data) {
                      var date = data.date,
                      mode = data.mode;
                      return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
                    },
      formatYear: 'yyyy',
      maxDate: new Date(2200, 1, 1),
      minDate: new Date(1980, 1, 1),
      startingDay: 1
    };
  }

  popupDatepicker = {
    opened: false
  };

  open = function() {
    this.popupDatepicker.opened = true;
  };

  $onInit(){
    console.log("initializing Rent...");
    this.getClients();
    this.getStorageloker();
    this._data.date = new Date();
  }

  getClients(){
    let self = this;
    this._Client
      .query(this.q)
      .then((res) => self._clients = res);
  }

  getStorageloker() {
    let self = this;
    this._Storageloker
      .query('available')
      .then((res) => self._storagelokers = res);
  }

  onStoragelokerSelect(selected) {
    let self = this;
    this._StoragelokertypeService
      .get(selected)
      .then((res) => self._storagelokertype = res[0]);
  }

  print(){
     let docDefinition = {
        content: [
          { text: 'This is a header', style: 'header' },
          'No styling here, this is a standard paragraph',
          { text: 'Another text', style: 'anotherStyle' },
          { text: 'Multiple styles applied', style: [ 'header', 'anotherStyle' ] }
        ],

        styles: {
          header: {
            fontSize: 22,
            bold: true
          },
          anotherStyle: {
            italic: true,
            alignment: 'right'
          }
        }
      };
      pdfMake.createPdf(docDefinition).open();
  }

}

//RentController.$inject = ['ClientService', 'StoragelokerService'];
export default RentController;
