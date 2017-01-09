import * as vis from 'ui-router-visualizer';
function AppRun(Auth, $rootScope, $state, $trace, $uiRouter, $transitions, $timeout, $http, $uibModal) {
  "ngInject";

  //$trace.enable('TRANSITION');
  //vis.visualizer($uiRouter);

  $transitions.onStart({
    to: (state) => {
      return !!state.data.requiresAuth;
    }
  }, function (trans) {
    var $state = trans.router.stateService;
    var _Auth = trans.injector().get('Auth');

    _Auth.ensureAuthIs(true);
  });

  $rootScope.$on('$stateChangeStart', (e, newUrl, oldUrl) => {
    if (newUrl !== oldUrl) {
      $rootScope.loadingView = true;
    }
  });
  $rootScope.$on('$stateChangeSuccess', () => {
    $rootScope.loadingView = false;
  });
  $rootScope.$on('$stateChangeError', () => {
    $rootScope.loadingView = false;
  });

  $rootScope.$on("event:signinRequest", function (event, data) {
    console.log("receviced:signinRequest");
    $state.go('signin');
  });

  $rootScope.$on("event:logoutRequest", function (event, data) {
    console.log("receviced:logoutRequest");
    Auth.logout();
    $state.go('signin');
  });

  $http.get('app.config.json')
    .then((data) => {
      $timeout(function() {
        if (data.data.promotion.enable && $state.is('home')) {
          let modalInstance = $uibModal.open({
            animation: true,
            closeOnEscape: true,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            template: `
              <div class="initial modal-header">
                <button type="button" class="close" ng-click="$dismiss()">&times;</button>
              </div>
              <div>
                <img class="initialModal" src="${data.data.promotion.image}" alt="First slide" />
              </div>`,
            size: 'lg'
          });
          modalInstance.result.then((res) => {}, (err) => {});
        }
      }, 500);
    }, (err) => {
      console.log("rejected with", err);
    });

};

export default AppRun;
