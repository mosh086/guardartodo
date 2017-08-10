import modalTemplate from './file.modal.html'
import modalInstanceCtrl from './file.modal.controller'

class FileController {
  constructor($uibModal, $scope, $filter, $stateParams, toastr, ClientService, FileService, AppConstants) {
    "ngInject";

    this._uibModal = $uibModal;
    this._toastr = toastr;
    this._FileService = FileService;
    this._ClientService = ClientService;
    this._clientId = $stateParams.id;
    this._AppConstants = AppConstants;
    this._files = [];
  }

  $onInit() {
    console.log("initializing Client...");
    this.searchFiles();
  }

  searchFiles(){
    let self = this;
    this._FileService.query(this._clientId)
      .then((res) => {
            self._files = res;
          },
        (err) => console.log('error: ' + err)
      )
  };

  openDialog(){
    let self = this;
    let modalInstance = this._uibModal.open({
      animation: true,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      template: modalTemplate,
      controller: modalInstanceCtrl,
      controllerAs: '$ctrl',
      size: 'lg',
      resolve: {
        client: () => {
          return (self._clientId)?self._ClientService.get(self._clientId):undefined;
        }
      }
    });

    modalInstance.result
      .then((data) => self.save(data),
        (err) => {
          //if (err !== 'cancel') {
          //  console.log('error: ' + err);
          //  self._toastr.error(`Error ${err.message}`);
          //}
        }
      );
  }

  save(data) {
    let self = this;
    this._FileService.save(data)
      .then((res) => {
        if (res.data.insertId == 0)
          self._toastr.success(`El archivo ${data.name} se adjunto correctamente`);
        else {
          self._FileService.saveData(res.data.insertId, data).then((res) => {
            self.searchFiles();
            self._toastr.success(`El archivo ${data.name} se adjunto correctamente`);
          });
        }
        //self.searchClients();
      },
        (err) => {
          console.log('error: ' + err);
          self._toastr.error(`Error: ${err.data}`);
        }
      )
  }

  download(id) {
    let anchor = angular.element('<a/>');
    anchor.css({display: 'none'}); // Make sure it's not visible
    angular.element(document.body).append(anchor); // Attach to document
    anchor.attr({
        href: this._AppConstants.api + "/download/" + id,
        target: '_blank'
      })[0].click();
    anchor.remove();
  }

  remove(id, name) {
    let self = this;
    this._FileService.remove(id)
      .then((res) => {
        self._toastr.success(`El archivo ${name} fue eliminado correctamente`);
        self.searchFiles();
      },
        (err) =>  {
          console.log('error: ' + err);
          self._toastr.error(`Error: ${err.data}`);
        }
      );
  }

}

export default FileController;
