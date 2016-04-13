angular.module('myapp', [
    'ui.router'
])
.run(["$rootScope",function($rootScope){
    $rootScope.appStart = new Date().getTime();
}])
.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
        $urlRouterProvider.otherwise('/a');
        $stateProvider
        .state('a',{
            url:'/a',
            templateUrl:'template/a.html',
            controller:["$scope","$rootScope",function($scope,$rootScope){
               $scope.time = new Date().getTime() -  $rootScope.appStart;
            }]
        })
        .state('b',{
            url:'/b',
            templateUrl:'template/b.html'
        })
        .state('c',{
            url:'/c',
            templateUrl:'template/c.html'
        })
    }])