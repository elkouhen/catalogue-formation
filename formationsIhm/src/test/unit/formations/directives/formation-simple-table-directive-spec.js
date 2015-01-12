/* global beforeEach, describe, expect, it, module, inject */

(function () {
    'use strict';

    describe('unit/formations/directives/formation-simple-table-directive-spec.js', function () {

        beforeEach(module('formationsApp'));

        describe('La directive formationSimpleTable', function () {
            var scope, element, $compile;

            beforeEach(inject(function ($rootScope, _$q_, _$compile_, $templateCache) {

                $compile = _$compile_;

                var store = {};

                store.FRS_FRM1 = true;

                spyOn(localStorage, 'getItem').and.callFake(function (key) {
                    return store[key];
                });

                spyOn(localStorage, 'setItem').and.callFake(function (key, value) {
                    store[key] = value + '';
                });

                $templateCache.put('partials/formations/directives/formation-simple-table-directive.html',
                    '<tr ng-repeat=\"formation in formations\"><td>{{formation.titre}}</td></tr>');

                scope = $rootScope.$new();
                scope.formations = [{
                    'id': 'FRM1',
                    'titre': 'Développement d\"applications Java EE'
                }];

                element = $compile(angular.element('<div formation-simple-table formations="formations"></div>'))(scope);

                scope.$apply();
            }));

            it('publie un getter sur le statut d\'une formation', function () {
                expect(element.isolateScope().getStatus({
                    'id': 'FRM1'
                })).toBeTruthy();

                expect(element.isolateScope().getStatus({
                    'id': 'FRM2'
                })).toBeFalsy();
            });
        });
    });
}());