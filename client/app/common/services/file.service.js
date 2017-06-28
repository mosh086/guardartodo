class File {
  constructor(AppConstants, $http, $q) {
    'ngInject';

    this._AppConstants = AppConstants;
    this._$http = $http;
    this._$q = $q;
  }

  query(keyword) {
    let deferred = this._$q.defer();
    let request = {
      url: this._AppConstants.api + '/files',
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
      deferred.reject("file id is empty");
      return deferred.promise;
    }
    if (!id.toString().replace(" ", "")) {
      deferred.reject("file id is empty");
      return deferred.promise;
    }
    this._$http({
      url: this._AppConstants.api + '/files/' + id,
      method: 'GET'
    })
      .then(
      (res) => deferred.resolve(res.data),
      (err) => deferred.reject(err)
      );
    return deferred.promise;
  }

  save(data) {
    let self = this;
    let deferred = this._$q.defer();
    let fd = new FormData();
    fd.append('file', data.file);
    self._$http.post(self._AppConstants.api + "/files/" + data.clientId, fd, {
        transformRequest: angular.identity,
        headers: {'Content-Type': undefined}
    }).then(
        (res) => { deferred.resolve(res) },
        (err) => deferred.reject(err)
      );
    return deferred.promise;
  }

  saveData(id, data) {
    let request = {};
    console.log(id);
    request.url = `${this._AppConstants.api}/files/${id}`;
    request.method = 'PUT';

    request.data = data;
    return this._$http(request);
  }

  remove(id) {
    let deferred = this._$q.defer();
    if (!id) {
      deferred.reject("file id is empty");
      return deferred.promise;
    }
    if (!id.toString().replace(" ", "")) {
      deferred.reject("file id is empty");
      return deferred.promise;
    }
    this._$http({
      url: this._AppConstants.api + '/files/' + id,
      method: 'DELETE'
    })
      .then(
      (res) => deferred.resolve(res.data),
      (err) => deferred.reject(err)
      );
    return deferred.promise;
  }

}

export default File;
