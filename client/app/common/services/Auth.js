class Auth {
  constructor(JWT, AppConstants, $http, $state, $q) {
    'ngInject';

    this._JWT = JWT;
    this._AppConstants = AppConstants;
    this._$http = $http;
    this._$state = $state;
    this._$q = $q;
    this.current = null;
  }

  attempAuth(type, credentials) {
    let path = (type == 'signin') ? '/login' : '/signup';
    let self = this;
    let request = {
      url: this._AppConstants.api + '/auth' + path,
      method: 'POST',
      data: credentials
    };
    return this._$http(request)
      .then(
        (res) => {
          self._JWT.save(res.data.id_token);
          self.current = res.data.user;
          return res;
        },
        (err) => {
          return err;
        });
  }

  ensureAuthIs(b) {
    let deferred = this._$q.defer();
    this.verifyAuth().then((authValid) => {
      // if it's the opposite, redirect home
      if (authValid !== b) {
        this._$state.go('signin');
        deferred.resolve(false);
      } else {
        deferred.resolve(true);
      }
    });

    return deferred.promise;
  }

  verifyAuth() {
    let deferred = this._$q.defer();
    let self = this;
    if (!this._JWT.get()) {
      deferred.resolve(false);
      return deferred.promise;
    }
    if (this.current) {
      deferred.resolve(true);
    } else {
      this._$http({
        url: this._AppConstants.api + '/users/me',
        method: 'GET'
      })
        .then(
        (res) => {
          self.current = res.data[0];
          deferred.resolve(true);
        },
        (err) => {
          this._JWT.destroy();
          deferred.resolve(false);
        }
        );
    }
    return deferred.promise;
  }

  logout() {
    this.current = null;
    this._JWT.destroy();
    this._$state.go(this._$state.$current, null, { refresh: true });
  }

}

export default Auth;
