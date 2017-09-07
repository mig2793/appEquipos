appescom.controller('homeController',['$scope','$state','homeService','globals','ModalService',
function($scope,$state,homeService,globals,Modal) {
	
	var dataUser = JSON.parse(localStorage.getItem("user"));
	$scope.requests = {};
	$scope.validateR = false, $scope.validateC = false, $scope.validateW = false;

	function getRequests(){
		url = "solicitudes/getrequestAll/" + dataUser.documento;
		data = {};
		homeService.servicesLogin(data,url).then(function(promise){
			$scope.requests = promise.data.response;
			if($scope.requests != 'No se encontraron datos'){
				for(var i=0;i<$scope.requests.length;i++){
					if($scope.requests[i].estado_solicitud == 1 && $scope.requests[i].days >= -3)
						$scope.validateR = true
					if($scope.requests[i].estado_solicitud == 2 && $scope.requests[i].days >= -3)
						$scope.validateW = true
					if($scope.requests[i].estado_solicitud == 3 && $scope.requests[i].days >= -3)
						$scope.validateC = true
				}
			}else{
				$scope.validateR = false, $scope.validateC = false, $scope.validateW = false;
			}

		})
	}

    $scope.deleteRequest = function(id){
      globals.set(id);
      Modal.showModal({
        templateUrl : 'app/components/pop-ups/ConfirmDelete/ConfirmDelete.html',
        controller : 'confirmController'
      });      
    }

	getRequests();
}]);