class MenuController {
  constructor($scope, $timeout) {
    'ngInject';

    this._$scope = $scope;

    $timeout(function() {
      $('[id^=scrollTo]').click(function() {
        var id = $(this).attr('id').slice(9);
        $(window).scrollTo($('#' + id), 1000, { offset: { top: -51, left: 0 } });
      });
    }, 0);
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

export default MenuController;

