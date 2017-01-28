class CarouselController {
  constructor($http) {
    "ngInject";
    this._items = [];

    $http.get('app.config.json').then((data) => {
      this._items = data.data.carousel;
    }, (err) => {
        console.log("rejected with", err);
    });

  }
}

export default CarouselController;
