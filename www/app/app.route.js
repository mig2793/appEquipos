appescom.config(function($stateProvider, $urlRouterProvider){

    $stateProvider
        .state('login',{
            url:            '/',
            templateUrl:    'app/components/login/login.html',
            controller:     'loginController'
        }).state('register',{
            url:            '/register',
            templateUrl:    'app/components/register/register.html',
            controller:     'RegisterController'
        }).state('menu',{
            url:            '/home',
            templateUrl:    'app/components/menu/menu.html',
            controller:     'menuController'
        }).state('menu.home',{
            url:            '/home',
            templateUrl:    'app/components/home/home.html',
            controller:     'homeController'
        }).state('menu.requestMachine',{
            url:            '/requestMachine',
            templateUrl:    'app/components/requestMachine/request.html',
            controller:     'requestMachineController'
        }).state('menu.news',{
            url:            '/news',
            templateUrl:    'app/components/reporterN/reporterNove.html',
            controller:     'reportController'
        });

        $urlRouterProvider.otherwise("/");

});

appescom.controller('mainController',['$scope','$state', function($scope,$state) {
    $state.go('login');
}]);