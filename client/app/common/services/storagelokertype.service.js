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
      .then((res) => deferred.resolve(res.data),
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
    }).then((res) => deferred.resolve(res.data),
        (err) => deferred.reject(err)
      );
    return deferred.promise;
  }

  save(storagelokertype) {
    let request = {};
    if (storagelokertype.storagelokertypeId) {
      request.url = `${this._AppConstants.api}/storagelokertypes/${storagelokertype.storagelokertypeId}`;
      request.method = 'PUT';
      delete storagelokertype.storagelokertypeId;
    } else {
      request.url = `${this._AppConstants.api}/storagelokertypes`;
      request.method = 'POST';
    }
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
    this._$http({
      url: this._AppConstants.api + '/storagelokertypes/' + id,
      method: 'DELETE'
    }).then((res) => deferred.resolve(res.data),
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
    request.url = `${this._AppConstants.api}/storagelokertypes/unique`;
    request.method = 'POST';
    request.data = {"key": data.key, "property": data.property, "value": value};
    return this._$http(request);
  }

  removeValidation(id) {
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
      url: this._AppConstants.api + '/storagelokertypes/' + id + '/validation',
      method: 'POST'
    }).then((res) => {
      if (res.data && res.data.using > 0) {
        deferred.reject(res.data)
      } else {
        console.log(res.data); deferred.resolve(true)
      }

    },
      (err) => deferred.reject(err)
    );
    return deferred.promise;
  }

}

export default Storagelokertype;
