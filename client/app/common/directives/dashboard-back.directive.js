
function DashboardBack(Auth) {
  'ngInject';

  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      scope.Auth = Auth;
    }
  };
}

export default DashboardBack;
