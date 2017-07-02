class CredentialController {
  constructor($scope, $filter, $stateParams, RentService, Documents) {
    "ngInject";

    //this._toastr = toastr;
    this._Rent = RentService;
    this._Documents = Documents;

    this._credentials = [];
    this._credentialsTemp = [];
    let self = this;
    
    $scope.$watch('search', function (val) {
      self._credentials = $filter('filter')(self._credentialsTemp, val);
    });
    this._ClientId = $stateParams.id;
  }

  $onInit() {
    console.log("initializing Client...");
    this.searchRent();
  }

  searchRent() {
    let self = this;
    this._Rent
      .getByClientId(self._ClientId)
      .then((res) => {
        self._credentials = res;
        self._credentialsTemp = res;
      },
        (err) => {
          console.log('error: ' + err);
          //self._toastr.error(`Error ${err.message}`);
        }
      );
  }

  credential(id) {
    let self = this;
    self._Documents.openCredentialByRenId(self._ClientId, id);
  }


}

export default CredentialController;
