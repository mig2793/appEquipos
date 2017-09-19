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
			}else if(result.message[0].rol != undefined){
				if(result.message[0].rol != "Usuario"){
		            globals.set("El usuario no tiene permisos para ingresar a la aplicación");
		            Modal.showModal({
		              templateUrl : 'app/components/pop-ups/popGlobal/popUpMessage.html',
		              controller : 'globalPopController'
		            })  					
				}				
			}else{
	            globals.set(result.message);
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

	$scope.rembemberPass = function(){
        Modal.showModal({
          templateUrl : 'app/components/pop-ups/changePassword/rememberPass.html',
          controller : 'rememPassController'
        })		
	}
	
}]);

