import angular from 'angular';
import Home from './home';
import Dashboard from './dashboard';
import Client from './client';
import Signin from './signin';
import Signup from './signup';
import Resetpassword from './resetpassword';
import Storageloker from './storageloker';
import Storagelokertype from './storagelokertype';
import User from './user';
import Rent from'./rent';
import Rentedit from'./rentedit';
import Payment from'./payment';
import Promotion from'./promotion';
import File from'./client/file';
import Credential from'./client/credential';

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
  Resetpassword,
  Rent,
  Rentedit,
  Payment,
  Promotion,
  File,
  Credential
//...
])
.name;

export default componentsModule;
