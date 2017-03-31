import angular from 'angular';
import ClientService from './client.service';
import DashboardService from './dashboard.service';
import SigninService from './signin.service';
import SignupService from './signup.service';
import StoragelokerService from './storageloker.service';
import StoragelokertypeService from './storagelokertype.service';
import UserService from './user.service';
import RentService from './rent.service';
import PaymentService from './payment.service';
import PromotionService from './promotion.service';
import FileUploadService from './file-upload.service';
import Auth from './Auth';
import JWT from './JWT';
import Documents from './Documents';

//...
let commonServicesModule = angular.module('app.common.services', [])
  .service('JWT', JWT)
  .service('Auth', Auth)
  .service('Documents', Documents)
  .service('ClientService', ClientService)
  .service('DashboardService', DashboardService)
  .service('SigninService', SigninService)
  .service('SignupService', SignupService)
  .service('StoragelokerService', StoragelokerService)
  .service('StoragelokertypeService', StoragelokertypeService)
  .service('UserService', UserService)
  .service('RentService', RentService)
  .service('PaymentService', PaymentService)
  .service('PromotionService', PromotionService)
  .service('FileUploadSevice', FileUploadService)
.name;

export default commonServicesModule;
