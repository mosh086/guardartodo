class Rent {
  constructor(AppConstants, $http, $q) {
    'ngInject';

    this._AppConstants = AppConstants;
    this._$http = $http;
    this._$q = $q;
  }

  query(keyword) {
    let deferred = this._$q.defer();
    let request = {
      url: this._AppConstants.api + '/rents',
      method: 'GET',
      params: !!keyword ? { 'q': keyword } : null
    };
    this._$http(request)
      .then(
        (res) => deferred.resolve(res.data),
        (err) => deferred.reject(err)
      );
    return deferred.promise;
  }

  get(id) {
    let deferred = this._$q.defer();
    if (!id) {
      deferred.reject("rent id is empty");
      return deferred.promise;
    }
    if (!id.toString().replace(" ", "")) {
      deferred.reject("rent id is empty");
      return deferred.promise;
    }
    this._$http({
      url: this._AppConstants.api + '/rents/' + id,
      method: 'GET'
    })
      .then(
      (res) => deferred.resolve(res.data),
      (err) => deferred.reject(err)
      );
    return deferred.promise;
  }

  save(rent) {
    let request = {};
    if (rent.rentId) {
      request.url = `${this._AppConstants.api}/rents/${rent.rentId}`;
      request.method = 'PUT';
      delete rent.rentId;
    } else {
      request.url = `${this._AppConstants.api}/rents`;
      request.method = 'POST';
    }
    request.data = rent;
    return this._$http(request);
  }

  remove(id) {
    let deferred = this._$q.defer();
    if (!id) {
      deferred.reject("rent id is empty");
      return deferred.promise;
    }
    if (!id.toString().replace(" ", "")) {
      deferred.reject("rent id is empty");
      return deferred.promise;
    }
    this._$http({
      url: this._AppConstants.api + '/rents/' + id,
      method: 'DELETE'
    })
      .then(
      (res) => deferred.resolve(res.data),
      (err) => deferred.reject(err)
      );
    return deferred.promise;
  }

}

export default Rent;
