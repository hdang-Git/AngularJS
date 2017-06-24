app.directive('myDownloadDirective', function(){
    function linkFunction(scope, element, attrs) { 
        scope.extensions = ['png', 'jpeg', 'pdf', 'svg'];
        scope.getId = function(text){
          alert(text);
        };
        
        scope.downloadCanvas = function(cid, title, extension){
            console.log('clicked ' + extension);
            var canvasElement = angular.element(document.querySelector('#'+cid));   //get canvas unique id
            console.log('canvasElement: ' + '#' + cid);
            console.log(canvasElement);
            var blah = $('#base');
            console.log(blah);
            var imageUriData = $('#' + cid).get(0).toDataURL('image/' + extension);
            console.log('image/' + extension);
            scope.dataURL = imageUriData;
            //console.log('imageUriData:');
            //console.log(imageUriData);
            var link = angular.element(document.querySelector('#'+extension));
            console.log(link);
            link.attr('href', imageUriData);
            link.attr('target', '_blank');
            var linkTitle = title + '.' +extension ;
            link.attr('download', linkTitle);
            
            $('#'+ extension)[0].click(); // angular can only have one click operation at a time
        };
    } //DOM manipulation
    
    function controllerFunction($scope){

    }
    
    return {
        restrict: 'E', //E = element, A = attribute, C = class, M = comment         
        replace: true,
        scope: {
            //@ reads the attribute value, = provides two-way binding, & works with functions
            canvasId: '@',
            extensions: '@'
        },
        templateUrl: 'htmlPartials/dropdownlist.html',
        controller: controllerFunction, //Embed a custom controller in the directive
        link: linkFunction
    };
});














