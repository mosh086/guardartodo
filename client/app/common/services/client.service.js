class Client {
  constructor(AppConstants, $http, $q) {
    'ngInject';

    this._AppConstants = AppConstants;
    this._$http = $http;
    this._$q = $q;
  }

  query(keyword) {
    let deferred = this._$q.defer();
    // Create the $http object for this request
    let request = {
      url: this._AppConstants.api + '/clients',
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
      deferred.reject("client id is empty");
      return deferred.promise;
    }
    if (!id.toString().replace(" ", "")) {
      deferred.reject("client id is empty");
      return deferred.promise;
    }
    this._$http({
      url: this._AppConstants.api + '/clients/' + id,
      method: 'GET'
    })
      .then(
      (res) => deferred.resolve(res.data),
      (err) => deferred.reject(err)
      );
    return deferred.promise;
  }

}

Client.$inject = ['AppConstants', '$http', '$q'];
export default Client;
