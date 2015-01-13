/* global angular, beforeEach, describe, expect, it, module, inject, spyOn, localStorage */

(function () {
  'use strict';

  describe('unit/formations/services/formation-services-spec.js', function () {

    beforeEach(module('formationsApp'));

    describe('Le service formationService', function () {
      var $rootScope, $httpBackend, scope, service;

      beforeEach(inject(function (_$rootScope_, _$httpBackend_, _$q_, _formationService_) {
        $rootScope = _$rootScope_;
        service = _formationService_;
        $httpBackend = _$httpBackend_;

        // mock du localStorage
        var store = {};

        store.FRS_FRM1 = true;
        store.FRS_FRM2 = false;

        spyOn(localStorage, 'getItem').and.callFake(function (key) {
          return store[key];
        });
        spyOn(localStorage, 'setItem').and.callFake(function (key, value) {
          store[key] = value + '';
        });

        // mock du backend
        _$httpBackend_.when('GET', 'services/formations?categorie=tech-web').respond(function () {

          return [200, [], {}];
        });

        _$httpBackend_.when('GET', 'services/formations').respond(function () {

          return [200, [{
            "id": "1",
            "categorie": "tech-java-ee",
            "titre": "Programmation orientée objet en Java",
            "duree": "4j"
          }], {}];
        });

      }));

      it('.listeFormations() retourne toutes les formations existantes', function () {

        var result;

        service.listeFormations().$promise.then(function (value) {

          result = value;
        });

        $httpBackend.flush();

        expect(result.length).toBe(1);
      });

      it('.listeFormations(aCategorie) retourne toutes les formations d\'une catégorie donnée', function () {

        var result;

        service.listeFormations('tech-web').$promise.then(function (value) {

          result = value;
        });

        $httpBackend.flush();

        expect(result.length).toBe(0);
      });

      it('.getStatus retourne le statut d\'une formation (stocké dans le localStorage)', function () {

        expect(service.getStatus('FRM1')).toBe(true);
        expect(service.getStatus('FRM2')).toBe(false);
      });

      it('.setStatus modfie le statut d\'une formation (stocké dans le localStorage)', function () {
        expect(service.getStatus('FRM1')).toBe(true);
        service.setStatus('FRM1', false);
        expect(service.getStatus('FRM1')).toBe(false);
      });

      it('.toggleStatus inverse le statut d\'une formation (stocké dans le localStorage)', function () {
        expect(service.getStatus('FRM1')).toBe(true);
        service.toggleStatus('FRM1');
        expect(service.getStatus('FRM1')).toBe(false);
      });
    });
  });
}());