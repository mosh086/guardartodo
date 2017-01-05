class FeaturettesController {
  constructor($timeout) {
    "ngInject";
    this.name = 'featurettes';

    $timeout(function() {
      $('#marketing').waypoint(function() {
          $('.img-mark').addClass('animated zoomIn');
      }, {
          offset: '50%',
          triggerOnce: true
      });

    }, 0);
  }

}

export default FeaturettesController;
