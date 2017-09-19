appescom.controller('menuController',['$scope','$state','ModalService',
function($scope,$state,Modal) {

	$scope.dataUser = JSON.parse(localStorage.getItem("user"));

	$("li").click(function(){
		$("li").css("background-color","transparent");
		$(this).css("background-color","#1e496f");
	})

	$scope.closeSession = function(){
		localStorage.clear();
		$state.go("login");
	}

	$scope.changePass = function(){
        Modal.showModal({
          templateUrl : 'app/components/pop-ups/changePassword/changePassword.html',
          controller : 'changePassController'
        })
	}

}]);