'use strict';

describe('module Formations : ', function () {
	beforeEach(module('formations'));

	describe('Le Controller SelectionController', function () {
		var scope,
		controller;


		beforeEach(function(){
			
			angular.mock.module('formationsApp');

			angular.module('formationsAppMock', [])
			.service('formationService', function(){
				this.listeFormations = function (acategorie) {

					return ['un', 'deux', 'trois']; 
				};
			});

			angular.mock.module('formationsAppMock');
		}); 

		beforeEach(inject(function ($rootScope, $controller) {
			scope = $rootScope.$new();
			controller = $controller;
		}));

		it('initialise la variable de scope formations', function () {
			controller('SelectionController', {$scope: scope, $routeParams: {id: '1'}});
			expect(scope.formations.length).toBe(3);
		});
	});
});