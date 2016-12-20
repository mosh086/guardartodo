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

}

Dashboard.$inject = ['AppConstants', '$http', '$q'];
export default Dashboard;
