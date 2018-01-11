var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider',function($routeProvider){
    $routeProvider
        .when('/main',{
            templateUrl:'App/View/main.html',
            controller:'maincontroller'
        })
        .when('/page/:id',{
            templateUrl:'App/View/page.html',
            controller:'pagecontroller'
        })
        .otherwise('/main')
}])