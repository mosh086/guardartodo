import modalTemplate from './user.modal.html'
import modalInstanceCtrl from './user.modal.controller'

class UserController {
  constructor($uibModal, UserService) {
    "ngInject";

    this._uibModal = $uibModal;
    this._User = UserService;

    this._users = [];
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
        if (err !== 'cancel')
          console.log('error: ' + err);
      }
    );
  }

  save(data) {
    let self = this;
    this._User.save(data)
      .then((res) => self.searchUsers(),
        (err) => console.log('error: ' + err)
      )
  }

  remove(id) {
    let self = this;
    this._User.remove(id)
      .then((res) => self.searchUsers(),
        (err) => console.log('error: ' + err)
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
        (res) => self._users = res,
        (err) => console.log('error: ' + err)
      );
  }
}

export default UserController;
