escom.config(function($stateProvider, $urlRouterProvider){

    $stateProvider
        .state('login',{
            url:            '/login',
            templateUrl:    'app/components/Login/login.html',
            controller:     'loginController'
        }).state('register',{
            url:            '/register',
            templateUrl:    'app/components/Register/Register.html',
            controller:     'RegisterController'
        });

        $urlRouterProvider.otherwise("/");

});

escom.controller('mainController',['$scope','$state', function($scope,$state) {
    $state.go('login');
}]);