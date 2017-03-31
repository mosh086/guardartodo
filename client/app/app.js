import $ from 'jquery';

import 'tether';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import "animate.css/animate.min.css";

import 'waypoints';
import 'scrollTo';
import 'pdfMake';
import 'vfs_fonts';

import angular from 'angular';
import toastr from 'angular-toastr';
import 'angular-toastr/dist/angular-toastr.css';
import 'ui-select/dist/select.css';
import 'angular-messages';
import 'angular-animate';
import 'angular-touch';
import 'angular-sanitize';
import moment from 'moment';
//import ngFileUpload from 'ng-file-upload';
import 'angular-file-upload';
import uiRouter from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap';
import uiSelect from 'ui-select';
import Common from './common';
import Components from './components';
import AppComponent from './app.component';
import AppRun from './app.run';
import AppConstants from './app.constants';
import AppConfig from './app.config';

const requires = [
  'ngTouch',
  'ngMessages',
  'ngAnimate',
  'ngSanitize',
  toastr,
  uiRouter,
  uiBootstrap,
  uiSelect,
  //ngFileUpload,
  //angularFileUpload,
  Common,
  Components
];

angular.module('app', requires)
  .component('app', AppComponent)
  .constant('AppConstants', AppConstants)
  .config(AppConfig)
  .run(AppRun);
