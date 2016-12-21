class Storagelokertype {
  constructor(AppConstants, $http, $q) {
    'ngInject';

    this._AppConstants = AppConstants;
    this._$http = $http;
    this._$q = $q;
  }

  query(keyword) {
    let deferred = this._$q.defer();
    let request = {
      url: this._AppConstants.api + '/storagelokertypes',
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
      deferred.reject("storagelokertype id is empty");
      return deferred.promise;
    }
    if (!id.toString().replace(" ", "")) {
      deferred.reject("storagelokertype id is empty");
      return deferred.promise;
    }
    this._$http({
      url: this._AppConstants.api + '/storagelokertypes/' + id,
      method: 'GET'
    })
      .then(
      (res) => deferred.resolve(res.data),
      (err) => deferred.reject(err)
      );
    return deferred.promise;
  }

  save(storagelokertype) {
    console.log('3');
    let request = {};
    if (storagelokertype.storagelokertypeId) {
      console.log('4');
      request.url = `${this._AppConstants.api}/storagelokertypes/${storagelokertype.storagelokertypeId}`;
      request.method = 'PUT';
      delete storagelokertype.storagelokertypeId;
    } else {
      request.url = `${this._AppConstants.api}/storagelokertypes`;
      request.method = 'POST';
    }
    console.log('5');
    request.data = storagelokertype;
    return this._$http(request);
  }

  remove(id) {
    let deferred = this._$q.defer();
    if (!id) {
      deferred.reject("storagelokertype id is empty");
      return deferred.promise;
    }
    if (!id.toString().replace(" ", "")) {
      deferred.reject("storagelokertype id is empty");
      return deferred.promise;
    }
    console.log(id);
    this._$http({
      url: this._AppConstants.api + '/storagelokertypes/' + id,
      method: 'DELETE'
    })
      .then(
      (res) => deferred.resolve(res.data),
      (err) => deferred.reject(err)
      );
    return deferred.promise;
  }

}

Storagelokertype.$inject = ['AppConstants', '$http', '$q'];
export default Storagelokertype;
