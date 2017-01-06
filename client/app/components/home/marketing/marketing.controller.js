class MarketingController {
  constructor($http, $timeout) {
    "ngInject";

    this._items = [];

    $http.get('app.config.json').then((data) => {
      this._items = data.data.marketing;
    }, (err) => {
        console.log("rejected with", err);
    });

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

export default MarketingController;
