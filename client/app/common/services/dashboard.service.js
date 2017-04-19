class Dashboard {
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
      url: this._AppConstants.api + '/dashboard',
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
      deferred.reject("dashboar id is empty");
      return deferred.promise;
    }
    if (!id.replace(" ", "")) {
      deferred.reject("dashboard id is empty");
      return deferred.promise;
    }
    this._$http({
      url: this._AppConstants.api + '/dashboard/' + id,
      method: 'GET'
    })
      .then(
      (res) => deferred.resolve(res.data),
      (err) => deferred.reject(err)
      );
    return deferred.promise;
  }

  getRented() {
    let deferred = this._$q.defer();
    this._$http({
      url: this._AppConstants.api + '/dashboard/rented',
      method: 'GET'
    })
      .then(
      (res) => deferred.resolve(res.data),
      (err) => deferred.reject(err)
      );
    return deferred.promise;
  }

  getNewClients() {
    let deferred = this._$q.defer();
    this._$http({
      url: this._AppConstants.api + '/dashboard/newclients',
      method: 'GET'
    })
      .then(
      (res) => deferred.resolve(res.data),
      (err) => deferred.reject(err)
      );
    return deferred.promise;
  }

  getStoragelokerAvailable() {
    let deferred = this._$q.defer();
    this._$http({
      url: this._AppConstants.api + '/dashboard/available',
      method: 'GET'
    })
      .then(
      (res) => deferred.resolve(res.data),
      (err) => deferred.reject(err)
      );
    return deferred.promise;
  }

}

export default Dashboard;
