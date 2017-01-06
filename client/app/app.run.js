import * as vis from 'ui-router-visualizer';

function AppRun(Auth, $rootScope, $state, $trace, $uiRouter, $transitions, $timeout, $http) {
  "ngInject";

  $trace.enable('TRANSITION');
  vis.visualizer($uiRouter);

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


  $http.get('app.config.json').then(function(data) {
    //console.log(JSON.stringify(data.data));
  });


};

export default AppRun;
