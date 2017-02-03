class MenuController {
  constructor($scope, $timeout, $rootScope, $state) {
    'ngInject';

    this._$scope = $scope;
    this._$state = $state;
    this.isHome = false;
    let self = this;

    $timeout(function() {
      $('[id^=scrollTo]').click(function() {
        var id = $(this).attr('id').slice(9);
        $(window).scrollTo($('#' + id), 1000, { offset: { top: -51, left: 0 } });
      });

      $('.nav a').click(function () {
        $('.navbar-collapse').collapse('hide');
      });

      self._$scope.$watch(self._$state.current.name, function(val) {
        self.isHome = self._$state.is('home');
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

