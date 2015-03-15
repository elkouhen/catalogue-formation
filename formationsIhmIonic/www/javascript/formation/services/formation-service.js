/*global angular, localStorage */
(function () {

	'use strict';

	var formationService = function ($resource) {

		this.resource = $resource('http://elkouhen-softeam-E6540:3000/formations');

		this.listeFormations = function (acategorie) {

			if (acategorie) {
				return this.resource.query({
					categorie: acategorie
				});
			}

			return this.resource.query();
		};

		this.getStatus = function (id) {
			if (localStorage.getItem("FRS_" + id)) {
				return JSON.parse(localStorage.getItem("FRS_" + id));
			}

			return false;
		};

		this.setStatus = function (id, status) {
			localStorage.setItem("FRS_" + id, status);
		};

		this.toggleStatus = function (id) {
			this.setStatus(id, !this.getStatus(id));
		};
	};

	angular.module('formations').service('formationService', ['$resource', formationService]);
}());