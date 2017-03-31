class FileUpload {
  constructor(AppConstants, $http) {
    'ngInject';

    this._AppConstants = AppConstants;
    this._$http = $http;
  }

  uploadFileToUrl(file, uploadUrl) {
    let self = this;
    let fd = new FormData();
    fd.append('file', file);
console.log(self._AppConstants.api)
console.log(uploadUrl)
    self._$http.post(self._AppConstants.api + uploadUrl, fd, {
        transformRequest: angular.identity,
        headers: {'Content-Type': undefined}
    }).then(
        (res) => console.log('ffffffffffffffffffff'),
        (err) => deferred.reject(err)
      );
  }

}

export default FileUpload;
