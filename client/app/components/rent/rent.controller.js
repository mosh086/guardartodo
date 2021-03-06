class RentController {
  constructor($scope, $filter, $timeout, toastr,
    RentService, ClientService,
    StoragelokerService, StoragelokertypeService, FileUploadSevice,
    AppConstants, Documents) {
    "ngInject";

    this._toastr = toastr;
    this._Client = ClientService;
    this._Storageloker = StoragelokerService;
    this._Storagelokertype = StoragelokertypeService;
    this._Rent = RentService
    this._Documents = Documents;
    this._UploadFile = FileUploadSevice;
    this._AppConstants = AppConstants;
    this._timeout = $timeout;

    this._myFile;
    this._rents = [];
    this._rentsTemp = [];
    this._data = {};

    let self = this;
    $scope.$watch('search', function (val) {
      self._rents = $filter('filter')(self._rentsTemp, val);
    });

    $timeout(function() {
      $(document).ready( function() {
        $(document).on('change', ':file', function() {
          let input = $(this),
              label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
          let file = self._myFile;
          let uploadUrl = "/fileUpload/" + input.attr("data-rentid");
          self._UploadFile.uploadFile(file, uploadUrl).then(
            (res) => {
              self._toastr.success(`El archivo fue adjuntado correctamente`);
              self.searchRents();
            },
            (err) => {}
          );
        });
      });

    }, 0);
  }

  $onInit() {
    console.log("initializing Rent...");
    this.searchRents();
  }

  $onDestroy() {
    console.log("destroying Rent...");
  }

  searchRents() {
    let self = this;
    this._Rent
      .query(this.q)
      .then((res) => {
        self._rents = res;
        self._rentsTemp = res;
      },
        (err) => console.log('error: ' + err)
      );
  }

  print(id) {
    let self = this;
    this.searchRent(id);
  }

  remove(id) {
    let self = this;
    this._Rent.remove(id)
      .then((res) => {
        self._toastr.success(`Renta fue eliminada correctamente`);
        self.searchRents();
      },
        (err) => {
          console.log('error: ' + err);
          self._toastr.error(`Error: ${err.data}`);
        }
      )
  }

  searchRent(id){
    let self = this;
    this._Rent.get(id)
      .then((res) => {
            self._data = res
            self._data.startDate = new Date(self._data.startDate)
            self.searchClient(res.clientId, res.storagelokerId);
          },
        (err) => console.log('error: ' + err)
      )
  };

  searchClient(clientId, storagelokerId) {
    let self = this;
    this._Client.get(clientId)
      .then((res) => {
            self._data.client = res;
            self.searchStorageloker(storagelokerId);
          },
        (err) => console.log('error: ' + err)
      )
  }

  searchStorageloker(id) {
    let self = this;
    this._Storageloker.get(id)
      .then((res) => {
            self._data.storageloker = res;
            self.searchStoragelokertype(res.storagelokertypeId);
          },
        (err) => console.log('error: ' + err)
      )
  }

  searchStoragelokertype(id) {
    let self = this;
    this._Storagelokertype.get(id)
      .then((res) => {
            self._data.storagelokertype = res;
            self._Documents.openContract(self._data);
          },
        (err) => console.log('error: ' + err)
      )
  }

  setEndDateRent(id) {
    let self = this;
    this._Rent.endDateRent(id)
      .then((res) => {
            self.searchRents();
          },
        (err) => console.log('error: ' + err)
      )
  }

  searchActive() {
    let self = this;
    this._Rent.query('active')
      .then((res) => {
        self._rents = res;
        self._rentsTemp = res;
      },
        (err) => console.log('error: ' + err)
      );
  }

  searchInactive() {
    let self = this;
    this._Rent.query('inactive')
      .then((res) => {
        self._rents = res;
        self._rentsTemp = res;
      },
        (err) => console.log('error: ' + err)
      );
  }

  searchPendingPayments() {
    let self = this;
    this._Rent.query('pendings')
      .then((res) => {
        self._rents = res;
        self._rentsTemp = res;
      },
        (err) => console.log('error: ' + err)
      );
  }

  download(id, name) {
    let anchor = angular.element('<a/>');
    anchor.css({display: 'none'}); // Make sure it's not visible
    angular.element(document.body).append(anchor); // Attach to document
    anchor.attr({
        href: this._AppConstants.api + "/download/" + id,
        target: '_blank'
      })[0].click();
    anchor.remove();
  }
}

export default RentController;
