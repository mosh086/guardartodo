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
      deferred.reject("user id is empty");
      return deferred.promise;
    }
    if (!id.toString().replace(" ", "")) {
      deferred.reject("user id is empty");
      return deferred.promise;
    }
    this._$http({
      url: this._AppConstants.api + '/users/' + id,
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

  remove(id) {
    let deferred = this._$q.defer();
    if (!id) {
      deferred.reject("user id is empty");
      return deferred.promise;
    }
    if (!id.toString().replace(" ", "")) {
      deferred.reject("user id is empty");
      return deferred.promise;
    }
    this._$http({
      url: this._AppConstants.api + '/users/' + id,
      method: 'DELETE'
    })
      .then(
      (res) => deferred.resolve(res.data),
      (err) => deferred.reject(err)
      );
    return deferred.promise;
  }

  reset(data) {
    let deferred = this._$q.defer();
    if (!data) {
      deferred.reject("data id is empty");
      return deferred.promise;
    }
    //todo prevente errors
    this._$http({
      url: this._AppConstants.api + '/users/reset/' + data.username,
      method: 'POST',
      data: data
    })
      .then(
      (res) => deferred.resolve(res.data),
      (err) => deferred.reject(err)
      );

    return deferred.promise;
  }

  getByRentId(id) {
    let deferred = this._$q.defer();
    if (!id) {
      deferred.reject("user id is empty");
      return deferred.promise;
    }
    if (!id.toString().replace(" ", "")) {
      deferred.reject("user id is empty");
      return deferred.promise;
    }
    //todo prevente errors
    this._$http({
      url: this._AppConstants.api + '/users/rent/' + id,
      method: 'GET'
    })
      .then(
      (res) => deferred.resolve(res.data),
      (err) => deferred.reject(err)
      );

    return deferred.promise;
  }



  me() {
    let deferred = this._$q.defer();
    this._$http({
      url: this._AppConstants.api + '/users/me',
      method: 'GET'
    })
      .then(
      (res) => {
        deferred.resolve(res);
      },
      (err) => {
        deferred.resolve(false);
      });
    return deferred.promise;
  }

  validate() {
    let deferred = this._$q.defer();
    deferred.reject(true);
    return deferred.promise;
  }

}

export default User;
