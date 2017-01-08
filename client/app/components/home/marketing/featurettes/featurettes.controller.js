class FeaturettesController {
  constructor($http, $timeout) {
    "ngInject";

    this._items = [];

    $http.get('app.config.json').then((data) => {
      this._items = data.data.featurettes;
    }, (err) => {
        console.log("rejected with", err);
    });

    $timeout(function() {
      $('.featurette').waypoint(function(direction) {
          $('#' + this.element.id + ' .featurette-image').addClass('animated pulse');
      }, {
          offset: '50%',
          triggerOnce: true
      });
    }, 0);
  }

}

export default FeaturettesController;
