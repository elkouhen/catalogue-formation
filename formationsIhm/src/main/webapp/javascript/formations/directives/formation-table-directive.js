(function ()  {

	'use strict';

	module.exports = function (formationService) {
		return {
			restrict: 'A', 
			templateUrl : 'partials/formations/directives/formation-table-directive.html', 
			controller : function ($scope){

				$scope.getStatus = function (formation) {

					if (formationService.getStatus(formation.id) === true){
						return 'glyphicon-star'; 
					}

					return 'glyphicon-star-empty'; 
				}; 

				$scope.toggleStatus = function (formation) {

					formationService.toggleStatus(formation.id); 
				}; 
			}
		}; 
	}; 
})();