function AppConfig($logProvider, toastrConfig, $httpProvider, $stateProvider, $locationProvider, $urlRouterProvider) {
  'ngInject';

  // Enable log
  $logProvider.debugEnabled(true);

  /*
    If you don't want hashbang routing, uncomment this line.
    Our tutorial will be using hashbang routing though :)
  */
  // $locationProvider.html5Mode(true);
  $locationProvider.html5Mode(true).hashPrefix('!');

  $stateProvider
    .state('app', {
      abstract: true,
      component: 'app'
    });

  $urlRouterProvider.otherwise('/');
}

export default AppConfig;
