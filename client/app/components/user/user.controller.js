import modalTemplate from './user.modal.html'
import modalInstanceCtrl from './user.modal.controller'

class UserController {
  constructor($uibModal, UserService) {
    this.name = 'user';
    this.user = [];
    this._uibModal = $uibModal;
    this._User = UserService;
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
        client: function () {
          return (id)?self._User.get(id):undefined;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
        //$ctrl.selected = selectedItem;
    }, function () {

    });
  }

  search() {
    console.log("query user by keyword" + this.q);
  }

  searchUsers() {
    let self = this;
    this._User
      .query(this.q)
      .then(
      (res) => self.user = res
      );
  }
}

UserController.$inject = ['$uibModal', 'UserService'];
export default UserController;
