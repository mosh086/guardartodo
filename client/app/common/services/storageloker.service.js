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
      .then((res) => deferred.resolve(res.data),
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
    }).then((res) => deferred.resolve(res.data),
        (err) => deferred.reject(err)
      );
    return deferred.promise;
  }

  save(storageloker) {
    let request = {};
    if (storageloker.storagelokerId) {
      request.url = `${this._AppConstants.api}/storagelokers/${storageloker.storagelokerId}`;
      request.method = 'PUT';
      delete storageloker.storagelokerId;
    } else {
      request.url = `${this._AppConstants.api}/storagelokers`;
      request.method = 'POST';
    }
    request.data = storageloker;
    return this._$http(request);
  }

  remove(id) {
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
      method: 'DELETE'
    })
      .then((res) => deferred.resolve(res.data),
        (err) => deferred.reject(err)
      );
    return deferred.promise;
  }

  checkUniqueValue(data, value) {
    let request = {};
    if (!data.property.toString().replace(" ", "")) {
      return this._$http(request);
    }
    if (!value.toString().replace(" ", "")) {
      return this._$http(request);
    }
    request.url = `${this._AppConstants.api}/storagelokers/unique`;
    request.method = 'POST';
    request.data = {"key": data.key, "property": data.property, "value": value};
    return this._$http(request);
  }

}

export default Storageloker;
