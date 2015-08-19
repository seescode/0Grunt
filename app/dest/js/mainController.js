(function () {
	'use strict';

	function MainController($scope, $location, $http) {
		var vm = this;


		vm.text = '3334';
	}
	MainController.$inject = ['$scope', '$location', '$http'];

	angular.module('app').controller('MainController', MainController);
})();