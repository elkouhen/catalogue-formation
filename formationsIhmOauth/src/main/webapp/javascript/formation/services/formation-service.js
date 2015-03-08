/*global angular, localStorage */
(function () {

	'use strict';

	var formationService = function ($resource, $http, AccessToken) {

		//this.resource = $resource('http://elkouhen-softeam-E6540:8080/services/formations');


		this.listeFormations = function (params) {

			/* if (params && params.categorie) {
				return this.resource.query({
					categorie: params.categorie
				});
			}

			return this.resource.query(); */

			return $http.get('services/formations', {
				'headers': {
					'Authorization': 'coucou'
				}
			});
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

	angular.module('formations').service('formationService', ['$resource', '$http', 'AccessToken', formationService]);
}());