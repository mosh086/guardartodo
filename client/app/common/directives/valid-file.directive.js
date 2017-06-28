function ValidFile() {
  'ngInject';

  return {
    restrict: 'A',
    require:'ngModel',
    link:function(scope,el,attrs,ngModel){
      el.bind('change',function(){
        scope.$apply(function(){
          ngModel.$setViewValue(el.val());
          ngModel.$render();
        });
      });
    }
  }
}

export default ValidFile;
