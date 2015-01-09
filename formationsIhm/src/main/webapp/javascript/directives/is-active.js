(function ()  {

	'use strict';

	module.exports = function ($location) {
		return {
			restrict: 'A',
			link: function(scope, element, attrs) {
						
				scope.$watch(function () { return $location.path(); }, function(newPath) {
					if (attrs.link === newPath) {
						element.addClass('active'); 
					} else {
						element.removeClass('active');
					}
				});
			}
		};
	};
})();