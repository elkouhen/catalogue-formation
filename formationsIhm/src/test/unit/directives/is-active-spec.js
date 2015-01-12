/* global beforeEach, describe, expect, it, module, inject */

(function () {
    'use strict';

    describe('unit/directives/is-active-spec.js', function () {

        beforeEach(module('formationsApp'));

        describe('La directive isActive', function () {
            var scope, location, compile;

            beforeEach(inject(function (_$rootScope_, _$location_, _$q_, _$compile_, _formationService_) {
                scope = _$rootScope_.$new();

                location = _$location_;
                
                compile = _$compile_; 
            }));

            it('ajoute la classe active à l\'élément cible si la page courante est celle passée dans l\'attribut link', function () {

                spyOn(location, 'path').and.callFake(function (key) {
                    return '/mypartial';
                });

                var element = compile(angular.element('<div is-active link="/mypartial"> </div>'))(scope);

                scope.$digest();

                expect(element[0].classList).toContain('active');
                // XXX expect(element[0]).toHaveClass('active');
            });

            it('n\'ajoute pas la classe active à l\'élément cible si la page courante n\'est celle passée dans l\'attribut link', function () {

                spyOn(location, 'path').and.callFake(function (key) {
                    return '/mypartial2';
                });

                var element = compile(angular.element('<div is-active link="/mypartial"> </div>'))(scope);

                scope.$digest();

                expect(element[0].classList).not.toContain('active');
            });
        });
    });
}());