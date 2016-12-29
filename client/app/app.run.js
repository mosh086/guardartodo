import * as vis from 'ui-router-visualizer';

import 'waypoints';

function AppRun(Auth, $rootScope, $state, $trace, $uiRouter, $transitions, $timeout) {
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

  $timeout(function() {
    $('#marketing').waypoint(function() {
        $('.img-circle').addClass('animated zoomIn');
    }, {
        offset: '50%',
        triggerOnce: false
    });

    $('.featurette').waypoint(function() {
        $('#' + this.element.id + ' .featurette-image').addClass('animated pulse');
    }, {
        offset: '50%',
        triggerOnce: false
    });
  }, 0);

};

export default AppRun;
