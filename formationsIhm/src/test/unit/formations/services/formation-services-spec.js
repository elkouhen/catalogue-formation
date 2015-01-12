/* global angular, beforeEach, describe, expect, it, module, inject, spyOn, localStorage */

(function () {
  'use strict';

  describe('unit/formations/services/formation-services-spec.js', function () {

    beforeEach(module('formationsApp'));

    describe('Le service formationService', function () {
      var scope, service, $httpBackend;

      beforeEach(inject(function (_$rootScope_, _$httpBackend_, _formationService_) {
        service = _formationService_;
        $httpBackend = _$httpBackend_;

        var store = {};

        store.FRS_FRM1 = true;
        store.FRS_FRM2 = false;

        spyOn(localStorage, 'getItem').and.callFake(function (key) {
          return store[key];
        });
        spyOn(localStorage, 'setItem').and.callFake(function (key, value) {
          store[key] = value + '';
        });

        _$httpBackend_.when('GET', 'services/formations?categorie=tech-web').respond([]);
        _$httpBackend_.when('GET', 'services/formations').respond(['un']);

      }));

      it('TEST 1', function () {

        // 

        var formations = service.listeFormations();

        $httpBackend.flush();

        expect(formations.$promise.$$state.value.length).toBe(1);
      });

      it('TEST 2', function () {

        var formations = service.listeFormations('tech-web');

        $httpBackend.flush();

        expect(formations.$promise.$$state.value.length).toBe(0);
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