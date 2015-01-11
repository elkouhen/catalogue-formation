'use strict';



describe('module Formations : ', function () {
	
	beforeEach(module('formationsApp'));

	describe('Le Controller SelectionController', function () {
		var scope, controller, rootScope;

		beforeEach(inject(function (_$rootScope_, _$q_, _$controller_, _formationService_) {

			rootScope = _$rootScope_; 

			scope = _$rootScope_.$new();
			controller = _$controller_;

			var deferred = _$q_.defer();

			deferred.resolve(['un']);
			spyOn(_formationService_, 'listeFormations').andReturn(deferred.promise);
		}));

		it('initialise la variable de scope formations', function () {
			controller('SelectionController', {$scope: scope});

			rootScope.$apply(); 

			expect(scope.formations.length).toBe(1);
		});
	});
});