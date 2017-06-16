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

app.controller('graphController', function($scope){
    $scope.colors = ['#45b7cd', '#ff6384', '#ff8e72'];

    $scope.labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    $scope.data = [
      [65, -59, 80, 81, -56, 55, -40],
      [28, 48, -40, 19, 86, 27, 90]
    ];
    $scope.datasetOverride = [
      {
        label: "Bar chart",
        borderWidth: 1,
        type: 'bar'
      },
      {
        label: "Line chart",
        borderWidth: 3,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        type: 'line'
      }
    ];
    
});

app.directive('myDomDirective', function(){
    function linkFunction(scope, element, attrs) { 
//        scope.name = 'Hello';
//        scope.changeName = function(newName){
//            scope.name = newName;
//        };
        scope.getId = function(text){
          alert(text);
        };
        
        
//        var i = 0;
//        element.bind('click', function () {
//            //element.html('You clicked me!');
//            console.log("click counter" + " " + i++ + " " + scope.canvasId);
//        });
        
    } //DOM manipulation
    
    function controllerFunction($scope){

    }
    
    return {
        restrict: 'E', //E = element, A = attribute, C = class, M = comment         
        replace: true,
        scope: {
            //@ reads the attribute value, = provides two-way binding, & works with functions
            canvasId: '@'         
        },
        //scope: true,
        //template: '<div>{{ myVal }}</div>',
        templateUrl: 'htmlPartials/mytemplate.html',
        controller: controllerFunction, //Embed a custom controller in the directive
        link: linkFunction
        
//        link: function (scope, element, attrs, controller)
//        {
//            scope.getId = function(text)
//            {
//    		console.log(text);
//                scope.lastTextReadout = text; //alert(text);
//            };
//        }
    };
});


/*
app.directive('test1', function ()
{
  return {
    restrict: 'E',
    replace: true,
    scope: {attributeClickParam: '@'},
    //transclude: true,
    
    template: 
      '<div>' +
    
        '<p><input type="button" value="Uninterpolated attributeClickParam" ng-click="doReadout(\'attributeClickParam\')"> Passes in the string \'attributeClickParam\', rather than the variable of the same name, because it\'s in quotes.</p>' +
      
        '<p><input type="button" value="Interpolated attributeClickParam" ng-click="doReadout(\'{{attributeClickParam}}\')"> The string is interpolated *before*, when the scope has yet to exist.</p>' +
      
        '<p><input type="button" value="Variable attributeClickParam" ng-click="doReadout(attributeClickParam)"> Shows up correctly. You don\'t want an interpolated string, nor do you want a string of any kind. The expression is javascript, so you can just pass the variable name as long as it exists in the scope.</p>' +
    
        '<br /><p>attributeClickParam: {{attributeClickParam}}</p>' +
        '<br /><p>lastTextReadout: {{lastTextReadout}} <input type="button" value="clear" ng-click="doReadout(\'\')"></p>' +
      '</div>',
    
    link: function (scope, element, attrs, controller)
    {
      scope.doReadout = function(text)
      {
    		console.log(text);
        scope.lastTextReadout = text; //alert(text);
      };
    }
  };
});
*/