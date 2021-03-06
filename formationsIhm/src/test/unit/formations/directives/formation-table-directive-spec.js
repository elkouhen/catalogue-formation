/* global angular, beforeEach, describe, expect, it, module, inject, spyOn, localStorage */

(function () {
  'use strict';

  describe('unit/formations/directives/formation-table-directive-spec.js', function () {

    beforeEach(module('formationsApp'));

    describe('La directive formationSimpleTable', function () {
      var scope, element, $compile;

      beforeEach(inject(function ($rootScope, _$compile_, $templateCache) {

        $compile = _$compile_;

        var store = {};

        store.FRS_FRM1 = true;

        spyOn(localStorage, 'getItem').and.callFake(function (key) {
          return store[key];
        });

        spyOn(localStorage, 'setItem').and.callFake(function (key, value) {
          store[key] = value + '';
        });

        $templateCache.put('partials/formations/directives/formation-table-directive.html',
          '<tr ng-repeat=\"formation in formations\"><td>{{formation.titre}}</td></tr>');

        scope = $rootScope.$new();
        scope.formations = [{
          'id': 'FRM1',
          'titre': 'Développement d\"applications Java EE'
                }];

        element = $compile(angular.element('<div formation-table formations="formations"></div>'))(scope);

        scope.$apply();
      }));

      it('publie un accesseur sur le statut d\'une formation', function () {
        expect(element.isolateScope().getStatus({
          'id': 'FRM1'
        })).toBe('glyphicon-star');

        expect(element.isolateScope().getStatus({
          'id': 'FRM2'
        })).toBe('glyphicon-star-empty');
      });

      it('publie un toggler sur le statut d\'une formation', function () {
        expect(element.isolateScope().getStatus({
          'id': 'FRM1'
        })).toBe('glyphicon-star');

        element.isolateScope().toggleStatus({
          'id': 'FRM1'
        });
        expect(element.isolateScope().getStatus({
          'id': 'FRM1'
        })).toBe('glyphicon-star-empty');
      });
    });
  });
}());