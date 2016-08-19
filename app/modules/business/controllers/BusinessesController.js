'use strict';

angular.module('business').controller('BusinessesController', ['$scope', '$filter',
	function ($scope, $filter) {
		$scope.view = {};
		$scope.about = true;
		$scope.product = false;
		$scope.services = false;
		$scope.team = false;

		$scope.user = {
			desc: 'Awesome user \ndescription!',
			status: 2
		};	

		$scope.statuses = [
			{value: 1, text: 'Venezuela'},
			{value: 2, text: 'Panama'},
			{value: 3, text: 'Colombia'},
			{value: 4, text: 'Chile'}
		]; 

		$scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };

		$scope.showStatus = function() {
			var selected = $filter('filter')($scope.statuses, {value: $scope.user.status});
			return ($scope.user.status && selected.length) ? selected[0].text : 'Not set';
		};		

	}
]);
