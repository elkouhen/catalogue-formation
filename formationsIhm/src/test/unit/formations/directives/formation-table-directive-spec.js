/* global beforeEach, describe, expect, it, module, inject */

(function () {
    'use strict';

    describe('unit/formations/directives/formation-table-directive-spec.js', function () {

        beforeEach(module('formationsApp'));

        describe('La directive formationSimpleTable', function () {
            var scope, element, $compile, $httpBackend;

            beforeEach(inject(function ($rootScope, _$q_, _$compile_, _$httpBackend_, $templateCache) {

                $compile = _$compile_;
                $httpBackend = _$httpBackend_;

                var store = {};

                store['FRS_FRM1'] = true;

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
                    'titre': 'coucou'
                }];

                element = $compile(angular.element('<div formation-table formations="formations"></div>'))(scope);

                scope.$apply();
            }));

            it('construit un scope avec un getter sur le statut d\'une formation', function () {
                expect(element.isolateScope().getStatus({
                    'id': 'FRM1'
                })).toBe('glyphicon-star');
                expect(element.isolateScope().getStatus({
                    'id': 'FRM2'
                })).toBe('glyphicon-star-empty');
            });

            it('construit un scope avec un toggler sur le statut d\'une formation', function () {
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