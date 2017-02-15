class Payment {
  constructor(AppConstants, $http, $q) {
    'ngInject';

    this._AppConstants = AppConstants;
    this._$http = $http;
    this._$q = $q;
  }

  query(keyword) {
    let deferred = this._$q.defer();
    let request = {
      url: this._AppConstants.api + '/payments',
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
      deferred.reject("payment id is empty");
      return deferred.promise;
    }
    if (!id.toString().replace(" ", "")) {
      deferred.reject("payment id is empty");
      return deferred.promise;
    }
    this._$http({
      url: this._AppConstants.api + '/payments/' + id,
      method: 'GET'
    })
      .then(
      (res) => deferred.resolve(res.data),
      (err) => deferred.reject(err)
      );
    return deferred.promise;
  }

  save(payment) {
    let request = {};
    if (payment.paymentId) {
      request.url = `${this._AppConstants.api}/payments/${payment.paymentId}`;
      request.method = 'PUT';
      delete payment.paymentId;
    } else {
      request.url = `${this._AppConstants.api}/payments`;
      request.method = 'POST';
    }
    request.data = payment;
    return this._$http(request);
  }

  remove(id) {
    let deferred = this._$q.defer();
    if (!id) {
      deferred.reject("payment id is empty");
      return deferred.promise;
    }
    if (!id.toString().replace(" ", "")) {
      deferred.reject("payment id is empty");
      return deferred.promise;
    }
    this._$http({
      url: this._AppConstants.api + '/payments/' + id,
      method: 'DELETE'
    })
      .then(
      (res) => deferred.resolve(res.data),
      (err) => deferred.reject(err)
      );
    return deferred.promise;
  }

}

export default Payment;
