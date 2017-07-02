import Company from './company';
import KindOfBusiness from './kind-of-business';
import LineOfBusiness from './line-of-business';
import MethodOfPayment from './method-of-payment';
import Image from './image';
import Logo from './logo2';

let commonServicesModule = angular.module('app.common.constants', [])
  .constant('Company', Company)
  .constant('KindOfBusiness', KindOfBusiness)
  .constant('LineOfBusiness', LineOfBusiness)
  .constant('MethodOfPayment', MethodOfPayment)
  .constant('Image', Image)
  .constant('Logo', Logo)
.name;

export default commonServicesModule;
