import * as vis from 'ui-router-visualizer';


//Auth,
function AppRun($rootScope, $state, $trace, $uiRouter, $transitions) {
  "ngInject";

  $trace.enable('TRANSITION');
  vis.visualizer($uiRouter);

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



};

export default AppRun;
