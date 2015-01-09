(function ()  {

	'use strict';

	module.exports = function (formationService) {
		return {
			restrict: 'A', 
			templateUrl : 'partials/formations/directives/formation-simple-table-directive.html', 
			controller : function ($scope){

				$scope.getStatus = function (formation) {

					return formationService.getStatus(formation.id) === true; 
				};  
			}
		}; 
	}; 
})();