appescom.controller('RegisterController',['$scope','$state',
function($scope,$state) {
	$scope.back = function(){
		$state.go("login");
	}
}]);
