import angular from 'angular';
import Home from './home';
import Dashboard from './dashboard';
import Client from './client';
import Signin from './signin';
import Signup from './signup';
import Storageloker from './storageloker';
import Storagelokertype from './storagelokertype';
import User from './user';
//...

let componentsModule = angular.module('app.components', [
  Home,
  Client,
  Signin,
  Signup,
  Storageloker,
  Storagelokertype,
  User
//...
])
.name;

export default componentsModule;
