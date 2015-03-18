/*global angular, localStorage */
(function () {

	'use strict';

	var formationService = function ($resource, $http) {

		this.listeFormations = function () {

			return $http.get('services/formations');
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

	angular.module('formations').service('formationService', ['$resource', '$http', formationService]);
}());