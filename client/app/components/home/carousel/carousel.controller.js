class CarouselController {
  constructor($http) {
    "ngInject";
    this.name = 'carousel';
    this._items = [];

    $http.get('app.config.json').then((data) => {
      this._items = JSON.stringify(data.data.carousel);
    }, (err) => {
        console.log("rejected with", err);
    });
  }
}

export default CarouselController;
