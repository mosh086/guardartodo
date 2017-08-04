function UniqueUser($filter, UserService) {
  'ngInject';

  return {
    restrict: 'A',
    require: 'ngModel',
    link: function (scope, element, attrs, ngModel) {
      element.bind('blur', function (e) {
              if (!ngModel || !element.val()) return;
              var keyProperty = scope.$eval(attrs.uniqueUser);
              var currentValue = element.val();
              UserService.checkUniqueValue(keyProperty, currentValue)
                .then(res => {
                  if (res.data[keyProperty.property] && res.data[keyProperty.property] == element.val())
                    ngModel.$setValidity('unique', false);
                  else
                    ngModel.$setValidity('unique', true);
                }, err => ngModel.$setValidity('unique', true))
          });
        }
    }
}

export default UniqueUser;
