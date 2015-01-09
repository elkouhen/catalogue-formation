(function ()  {

	'use strict';

	var angular = require('../vendors/angular');

	var module = angular.module('formations', [])
	.controller('FormationListController', require('./controllers/formation-list-controller'))
	.controller('SelectionController', require('./controllers/selection-controller'))
	.service('formationService', require('./services/formation-service'))
	.directive('formationTable', require('./directives/formation-table-directive'))
	.directive('formationSimpleTable', require('./directives/formation-simple-table-directive'));

	module.exports = module;   
})();