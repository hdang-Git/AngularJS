var app = angular.module('app', ['ngRoute', 'chart.js']);

app.config(function($routeProvider){
    $routeProvider.when('/', {
        templateUrl: 'htmlPartials/home.html',
        controller: 'graphController'
    }).when('/home', {
        templateUrl: 'htmlPartials/home.html',
        controller: 'graphController'
    }).otherwise({
        redirectTo: '/'
    });
});
