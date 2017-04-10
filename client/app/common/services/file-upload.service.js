class FileUpload {
  constructor(AppConstants, $http, $q) {
    'ngInject';

    this._AppConstants = AppConstants;
    this._$http = $http;
    this._$q = $q;

  }

  uploadFile(file, uploadUrl) {
    let self = this;
    let deferred = this._$q.defer();
    let fd = new FormData();
    fd.append('file', file);
    self._$http.post(self._AppConstants.api + uploadUrl, fd, {
        transformRequest: angular.identity,
        headers: {'Content-Type': undefined}
    }).then(
        (res) => deferred.resolve(res),
        (err) => deferred.reject(err)
      );
    return deferred.promise;
  }

  downloadFile() {
    let deferred = this._$q.defer();
    let request = {
      url: this._AppConstants.api + '/download/',
      method: 'GET',
      headers: {'Content-disposition': 'attachment; filename=filename.png'}
    };
    this._$http(request)
      .then(
        (res) => deferred.resolve(res.data),
        (err) => deferred.reject(err)
      );
    return deferred.promise;
  }

  getInfoDownload(id) {
    let deferred = this._$q.defer();
    // Create the $http object for this request
    let request = {
      url: this._AppConstants.api + '/upload/getinfo/' + id,
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

}

export default FileUpload;
