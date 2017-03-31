function UploadFile($parse) {
  'ngInject';

  return {
  restrict: 'A',
    link: function(scope, element, attrs) {

      let model = $parse(attrs.uploadFile);
      let modelSetter = model.assign;

      element.bind('change', function(){
        scope.$apply(function(){
          modelSetter(scope, element[0].files[0]);
        });
      });
    }
  }
}

export default UploadFile;
