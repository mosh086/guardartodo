import angular from 'angular';
import Home from './home';
import Dashboard from './dashboard';
import Client from './client';
import Signin from './signin';
import Signup from './signup';
import Storageloker from './storageloker';
import Storagelokertype from './storagelokertype';
import User from './user';
import Rent from'./rent';
import Rentlist from './rentlist';
import Rentviewer from'./rentviewer';
//...

let componentsModule = angular.module('app.components', [
  Home,
  Dashboard,
  Client,
  Signin,
  Signup,
  Storageloker,
  Storagelokertype,
  User,
  Signin,
  Signup,
  Rent,
  Rentlist,
  Rentviewer
//...
])
.name;

export default componentsModule;
