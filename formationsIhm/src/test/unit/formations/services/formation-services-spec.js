/* global beforeEach, describe, expect, it, module, inject */

(function () {
    'use strict';

    describe('unit/formations/services/formation-services-spec.js', function () {

        beforeEach(module('formationsApp'));

        describe('Le service formationService', function () {
            var scope, service;

            beforeEach(inject(function (_$rootScope_, _$q_, _formationService_) {
                service = _formationService_;

                var store = {};

                store.FRS_FRM1 = true;
                store.FRS_FRM2 = false;

                spyOn(localStorage, 'getItem').and.callFake(function (key) {
                    return store[key];
                });
                spyOn(localStorage, 'setItem').and.callFake(function (key, value) {
                    store[key] = value + '';
                });
            }));

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