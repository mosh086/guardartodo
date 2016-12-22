class MenuController {
  constructor($scope) {
    'ngInject';

    this._$scope = $scope;
    this.name = 'menu';
  }

  $onInit() {
    console.log("initializing NavbarController...");
  }

  $onDestroy() {
    console.log("destroying NavbarController...");
  }
  onSignin() {
    console.log("on signin...");
    this._$scope.$emit("event:signinRequest");
  }

  onLogout() {
    console.log("on logout...");
    this._$scope.$emit("event:logoutRequest");
  }
}

MenuController.$inject = ['$scope'];
export default MenuController;

