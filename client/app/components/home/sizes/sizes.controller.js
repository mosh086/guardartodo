class SizesController {
  constructor($http) {
    "ngInject";
    this._items = [];

    $http.get('app.config.json').then((data) => {
      this._items = data.data.sizes;
    }, (err) => {
        console.log("rejected with", err);
    });

  }
}

export default SizesController;
