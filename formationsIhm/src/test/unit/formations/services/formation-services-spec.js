/* global beforeEach, describe, expect, it, module, inject */

(function () {
    'use strict';

    describe('unit/formations/services/formation-services-spec.js', function () {

        beforeEach(module('formationsApp'));

        describe('Le service formationService', function () {
            var scope, service, $httpBackend;

            beforeEach(inject(function (_$rootScope_, _$q_, _$httpBackend_, _formationService_) {
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

                _$httpBackend_.expectGET('services/formations?categorie=coucou').respond([]); 
                      
                $httpBackend = _$httpBackend_; 
                
                _$httpBackend_.expectGET('services/formations')
                    .respond(['full']);
            }));

            it('TEST 1', function () {

                // 
                
                var formations = service.listeFormations(); 
                
                $httpBackend.flush();
                
                expect(formations.$$state.value.length).toBe(1);
            });
            
            it('TEST 2', function () {

                 var formations = service.listeFormations('coucou'); 
                
                $httpBackend.flush();
                
                expect(formations.$$state.value.length).toBe(0);
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