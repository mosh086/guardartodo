class User {
  constructor(AppConstants, $http, $q) {
    'ngInject';

    this._AppConstants = AppConstants;
    this._$http = $http;
    this._$q = $q;
  }

  query(keyword) {
    let deferred = this._$q.defer();
    let request = {
      url: this._AppConstants.api + '/users',
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

  save(user) {
    let request = {};
    if (user.userId) {
      request.url = `${this._AppConstants.api}/users/${user.userId}`;
      request.method = 'PUT';
      delete user.userId;
    } else {
      request.url = `${this._AppConstants.api}/users`;
      request.method = 'POST';
    }
    request.data = user;
    return this._$http(request);
  }

}

User.$inject = ['AppConstants', '$http', '$q'];
export default User;
