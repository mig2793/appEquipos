appescom.controller('loginController',['$scope','$state',
function($scope,$state) {
	
	$scope.login = function(){
		$state.go('menu.home');
	}

	$scope.register = function(){
		$state.go('register');
	}

}]);

