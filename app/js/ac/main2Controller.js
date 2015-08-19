(function () {
	'use strict';

	function Main2Controller($scope, $location, $http) {
		var vm = this;

		vm.text = '3334';
	}

	angular.module('app').controller('Main2Controller', Main2Controller);
})();