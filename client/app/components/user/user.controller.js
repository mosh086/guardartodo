import modalTemplate from './user.modal.html'
import modalInstanceCtrl from './user.modal.controller'

class UserController {
  constructor($uibModal, $scope, $filter, toastr, UserService) {
    "ngInject";

    this._uibModal = $uibModal;
    this._toastr = toastr;
    this._User = UserService;

    this._users = [];
    this._usersTemp = [];
    let self = this;
    $scope.$watch('search', function (val) {
      self._users = $filter('filter')(self._usersTemp, val);
    });
  }

  $onInit() {
    console.log("initializing Users...");
    this.searchUsers();
  }

  $onDestroy() {
    console.log("destroying Users...");
  }

  openDialog(id){
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
        user: function () {
          return (id)?self._User.get(id):undefined;
        }
      }
    });

    modalInstance.result.then((data) => self.save(data),
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
    this._User.save(data)
      .then((res) => {
        if (res.data.insertId == 0)
          self._toastr.success(`Usuario ${data.username} se actualizado correctamente`);
        else
          self._toastr.success(`Usuario ${data.username} fue creado correctamente`);

        self.searchUsers();
      },
        (err) => {
          console.log('error: ' + err);
          self._toastr.error(`Error ${err.message}`);
        }
      )
  }

  remove(id, name) {
    let self = this;
    this._User.remove(id)
      .then((res) => {
        self._toastr.success(`Usuario ${name} fue eliminado correctamente`);
        self.searchUsers();
      },
        (err) => {
          console.log('error: ' + err);
          self._toastr.error(`Error ${err.message}`);
        }
      )
  }

  search() {
    console.log("query user by keyword" + this.q);
  }

  searchUsers() {
    let self = this;
    this._User
      .query(this.q)
      .then(
        (res) => {
          self._users = res;
          self._usersTemp = res;
        },
        (err) => {
          console.log('error: ' + err);
          self._toastr.error(`Error ${err.message}`);
        }
      );
  }
}

export default UserController;
