/* global angular, beforeEach, describe, expect, it, module, inject, spyOn */

(function () {
  'use strict';

  describe('unit/directives/is-active-spec.js', function () {

    beforeEach(module('formationsApp'));

    describe('La directive isActive', function () {
      var scope, location, compile;

      beforeEach(inject(function (_$rootScope_, _$location_, _$compile_) {
        scope = _$rootScope_.$new();
        location = _$location_;
        compile = _$compile_;
      }));

      it('active l\'élément cible si la page courante est celle passée dans l\'attribut link', function () {

        spyOn(location, 'path').and.callFake(function (key) {
          return '/mypartial';
        });

        var element = compile(angular.element('<div is-active link="/mypartial"></div>'))(scope);

        scope.$digest();

        expect(element.hasClass('active')).toBe(true);
      });

      it('désactive l\'élément cible si la page courante n\'est pas celle passée dans l\'attribut link', function () {

        spyOn(location, 'path').and.callFake(function (key) {
          return '/mypartial2';
        });

        var element = compile(angular.element('<div is-active link="/mypartial"></div>'))(scope);

        scope.$digest();

        expect(element.hasClass('active')).toBe(false);
      });
    });
  });
}());