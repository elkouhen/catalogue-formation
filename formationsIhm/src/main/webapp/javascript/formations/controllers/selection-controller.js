(function ()  {

	'use strict';

	module.exports = function ($scope, formationService) {

		$scope.formations = formationService.listeFormations();
	}; 
})();