appescom.controller('loginController',['$scope','$state','loguinService','globals','ModalService',
function($scope,$state,loguinService,globals,Modal) {
	
	$scope.login = function(data){
		url = "users/login";
		console.log(data);
		datasend = JSON.stringify(data);
      	loguinService.servicesLogin(data,url).then(function(promise){
            var result = promise.data;
			if(result.state == 1 && result.message[0].rol == "Usuario"){
				var datals = result.message[0];
				datals = JSON.stringify(datals)
				localStorage.setItem("user",datals);
				$state.go('menu.home');
			}else{
	            globals.set("No estás registrado o no tienes permisos para ingresar a esta aplicación");
	            Modal.showModal({
	              templateUrl : 'app/components/pop-ups/popGlobal/popUpMessage.html',
	              controller : 'globalPopController'
	            })  
			}
      	})
	}

	$scope.register = function(){
		$state.go('register');
	}

}]);

