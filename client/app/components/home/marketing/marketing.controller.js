class MarketingController {
  constructor($timeout) {
    "ngInject";
    this.name = 'marketing';

    $timeout(function() {
      $('.featurette').waypoint(function(direction) {
          console.log(this.element.id);
          $('#' + this.element.id + ' .featurette-image').addClass('animated pulse');
      }, {
          offset: '50%',
          triggerOnce: true
      });

    }, 0);
  }
}

export default MarketingController;
