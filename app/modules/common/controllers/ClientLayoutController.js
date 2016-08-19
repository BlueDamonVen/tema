'use strict';

angular.module('common').controller('ClientLayoutController', ['$rootScope', '$scope', 'config', '$state', 'SessionService', '$location',
    function ($rootScope, $scope, config, state, SessionService, $location) {
		$rootScope.view = {};
		$scope.view = {};		
		var user = SessionService.getUser();
		if (user) {
			console.log(user);
		}else{
			$location.path("/login");
		}
    }

]);
