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

  getPendingPayments(id) {
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
      url: this._AppConstants.api + '/rents/' + id + /pendingpayments/,
      method: 'GET'
    })
      .then(
      (res) => deferred.resolve(res.data),
      (err) => deferred.reject(err)
      );
    return deferred.promise;
  }

  getByClientId(id) {
    let deferred = this._$q.defer();
    if (!id) {
      deferred.reject("client id is empty");
      return deferred.promise;
    }
    if (!id.toString().replace(" ", "")) {
      deferred.reject("client id is empty");
      return deferred.promise;
    }
    this._$http({
      url: this._AppConstants.api + '/rents/client/' + id,
      method: 'GET'
    })
      .then(
      (res) => deferred.resolve(res.data),
      (err) => deferred.reject(err)
      );
    return deferred.promise;
  }

  getPromotions(id) {
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
      url: this._AppConstants.api + '/rents/' + id + /promotions/,
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

  endDateRent(id) {
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
      url: this._AppConstants.api + '/rents/' + id + '/enddate',
      method: 'PUT'
    })
      .then(
      (res) => deferred.resolve(res.data),
      (err) => deferred.reject(err)
      );
    return deferred.promise;
  }

  validate(data) {
    let request = {};
    request.url = `${this._AppConstants.api}/rents/validate`;
    request.method = 'POST';
    request.data = data;
    return this._$http(request);
  }

}

export default Rent;
