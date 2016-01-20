'use strict';

angular.module('app', [

]);

(function () {
	'use strict';

	function MainController($scope, $location, $http) {
		var vm = this;


		vm.text = '3334';
	}
	MainController.$inject = ['$scope', '$location', '$http'];

	angular.module('app').controller('MainController', MainController);
})();
(function () {
	'use strict';

	function Main2Controller($scope, $location, $http) {
		var vm = this;

		vm.text = '3334';
	}
	Main2Controller.$inject = ['$scope', '$location', '$http'];

	angular.module('app').controller('Main2Controller', Main2Controller);
})();
//# sourceMappingURL=all.js.map