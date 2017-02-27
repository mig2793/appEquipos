appescom.controller('menuController',['$scope','$state',
function($scope,$state) {

	$("li").click(function(){
		$("li").css("background-color","transparent");
		$(this).css("background-color","#1e496f");
	})

	$scope.closeSession = function(){
		$state.go("login");
	}

}]);