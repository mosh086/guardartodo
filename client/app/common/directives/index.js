import angular from 'angular';
import ShowAuthed from './show-authed.directive';
import Currency from './currency.directive';
let directivesModule = angular.module('app.common.directives', [])

.directive('showAuthed', ShowAuthed)
.directive('currency', Currency)
.name;

export default directivesModule;
