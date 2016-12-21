class Storageloker {
  constructor(AppConstants, $http, $q) {
    'ngInject';

    this._AppConstants = AppConstants;
    this._$http = $http;
    this._$q = $q;
  }

  query(keyword) {
    let deferred = this._$q.defer();
    let request = {
      url: this._AppConstants.api + '/storagelokers',
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
      deferred.reject("storageloker id is empty");
      return deferred.promise;
    }
    if (!id.toString().replace(" ", "")) {
      deferred.reject("storageloker id is empty");
      return deferred.promise;
    }
    this._$http({
      url: this._AppConstants.api + '/storagelokers/' + id,
      method: 'GET'
    })
      .then(
      (res) => deferred.resolve(res.data),
      (err) => deferred.reject(err)
      );
    return deferred.promise;
  }

  save(storageloker) {
    let request = {};
    console.log(storageloker.storagelokerId);
    if (storageloker.storagelokerId) {
      request.url = `${this._AppConstants.api}/storagelokers/${storageloker.storagelokerId}`;
      request.method = 'PUT';
      delete storageloker.storagelokerId;
    } else {
      console.log('sdfsdf');
      request.url = `${this._AppConstants.api}/storagelokers`;
      request.method = 'POST';
    }
    request.data = storageloker;
    return this._$http(request);
  }

}

Storageloker.$inject = ['AppConstants', '$http', '$q'];
export default Storageloker;
