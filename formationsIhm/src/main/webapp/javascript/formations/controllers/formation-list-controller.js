(function ()  {

	'use strict';

	module.exports = function ($scope, $routeParams, formationService) {

		$scope.formations = formationService.listeFormations($routeParams.id);
	}; 
})();