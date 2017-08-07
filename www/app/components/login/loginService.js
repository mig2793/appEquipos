appescom.factory('loguinService',['$http', function($http){
    var login = {};

    login.servicesLogin = function(data,URL){
        showLoad();
        var promise = $http.post(window.urlService + URL,data)
            .success(function(data){
                hideLoad();
                console.log(data);
                return data;
            })
            .error(function(err){
                hideLoad();
                alert(err);
            });
        return promise;
    };
    
    return login;
}]);