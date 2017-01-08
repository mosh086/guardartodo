function Currency($filter) {
  'ngInject';

  return {
    require: 'ngModel',
    scope: {
      decimals: "="
    },
    link: function (scope, elem, attrs, ctrl) {
            if (!ctrl) return;

            var format = {
                    prefix: '',
                    centsSeparator: '.',
                    thousandsSeparator: ''
                };

            ctrl.$parsers.unshift(function (value) {
                return elem[0].value;
            });

            ctrl.$formatters.unshift(function (value) {
                elem[0].value = $filter('currency')(elem[0].value, '$', 2);
                console.log('formatters', elem[0].value);
                return elem[0].value ;
            })
        }

    }
}

export default Currency;
