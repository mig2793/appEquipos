appescom.controller('menuController',['$scope','$state',
function($scope,$state) {

	$scope.dataUser = JSON.parse(localStorage.getItem("user"));

	$("li").click(function(){
		$("li").css("background-color","transparent");
		$(this).css("background-color","#1e496f");
	})

	$scope.closeSession = function(){
		localStorage.clear();
		$state.go("login");
	}

}]);