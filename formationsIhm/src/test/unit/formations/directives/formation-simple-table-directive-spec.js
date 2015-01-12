/* global beforeEach, describe, expect, it, module, inject */

(function () {
    'use strict';

    describe('unit/formations/directives/formation-simple-table-directive-spec.js', function () {

        beforeEach(module('formationsApp'));

        describe('La directive formationSimpleTable', function () {
            var scope, controller;

            beforeEach(inject(function (_$rootScope_, _$q_, _$controller_, _formationService_) {

                scope = _$rootScope_.$new();
                controller = _$controller_;
            }));

            it('XXX', function () {

            });
        });
    });
}());