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
      component: 'app',
      data: {
        requiresAuth: true
      }
    });

  $urlRouterProvider.otherwise('/');

  $httpProvider.interceptors.push(jwtInterceptor);
}

function jwtInterceptor(JWT, AppConstants, $window, $q) {
  'ngInject';

  return {
    // automatically attach Authorization header
    request: function (config) {
      if (/*config.url.indexOf(AppConstants.api) === 0 &&*/ JWT.get()) {
        config.headers.Authorization = 'Bearer ' + JWT.get();
      }
      return config;
    },

    // Handle 401
    responseError: function (rejection) {
      if (rejection.status === 401) {
        // clear any JWT token being stored
        JWT.destroy();
        // do a hard page refresh
        $window.location.reload();
      }
      return $q.reject(rejection);
    }
  };
}

export default AppConfig;
