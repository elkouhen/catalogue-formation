/* global angular, beforeEach, describe, expect, it, module, inject, spyOn */

(function () {
  'use strict';

  describe('unit/formations/controllers/formation-list-controller-spec.js', function () {

    beforeEach(module('formationsApp'));

    describe('Le Controller FormationListController', function () {
      var scope, controller, rootScope;

      beforeEach(inject(function (_$rootScope_, _$q_, _$controller_, _formationService_) {

        rootScope = _$rootScope_;
        scope = _$rootScope_.$new();
        controller = _$controller_;

        spyOn(_formationService_, 'listeFormations')
          .and.callFake(function () {
            var deferred = _$q_.defer();

            deferred.resolve([{
              "id": "1",
              "categorie": "tech-java-ee",
              "titre": "Programmation orientée objet en Java",
              "duree": "4j"
    }]);

            return deferred.promise;
          });
      }));

      it('initialise la variable de scope formations avec un tableau de formations', function () {
        controller('FormationListController', {
          $scope: scope
        });

        var result;

        scope.formations.then(function (value) {

          result = value;
        });

        rootScope.$apply();

        expect(result[0]).toEqual({
          id: '1',
          categorie: 'tech-java-ee',
          titre: 'Programmation orientée objet en Java',
          duree: '4j'
        });
      });
    });
  });
}());