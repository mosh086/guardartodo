import Company from './company';
import KindOfBusiness from './kind-of-business';
import LineOfBusiness from './line-of-business';
import MethodOfPayment from './method-of-payment';

let commonServicesModule = angular.module('app.common.constants', [])
  .constant('Company', Company)
  .constant('KindOfBusiness', KindOfBusiness)
  .constant('LineOfBusiness', LineOfBusiness)
  .constant('MethodOfPayment', MethodOfPayment)
.name;

export default commonServicesModule;
