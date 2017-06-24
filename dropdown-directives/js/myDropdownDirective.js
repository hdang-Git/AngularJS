app.directive('dropdownList', function($document) {
    
    function linkFunction(scope, elem, attr) {
        
        scope.dropdownMessage = function(num){
            alert(num);
        };
        
        elem.bind('click', function() {
            elem.toggleClass('dropdown-active');
            elem.addClass('active-recent');
        });

        $document.bind('click', function() {
            if(!elem.hasClass('active-recent')) {
                    elem.removeClass('dropdown-active');
            }
            elem.removeClass('active-recent');
        });
    }
    
    function controllerFunction($scope){
    }
    
    return {
        restrict: "C",
        scope:{
            extensions:'@'
        },
        controller: controllerFunction,
        link: linkFunction
    };
});


//app.directive('dropdownList', function($document) {
//    
//    function linkFunction(scope, elem, attr) {
//        scope.extensions = ['png', 'jpg', 'pdf', 'svg'];
//        
//        scope.dropdownMessage = function(num){
//            alert(num);
//        };
//        scope.downloadCanvas = function(cid, title, extension){
//            console.log('clicked');
//            var canvasElement = angular.element(document.querySelector('#'+cid));   //get canvas unique id
//            var imageUriData = (canvasElement.get(0).toDataURI('image/png'));       //convert canvas to uri data
//            console.log(imageUriData);
//            var link = angular.element(document.querySelector('#'+extension));
//            link.attr('href', imageUriData);
//            link.attr('target', '_blank');
//            var linkTitle = title + '.' +extension ;
//            link.attr('download', linkTitle);
//        };
//
//        elem.bind('click', function() {
//            elem.toggleClass('dropdown-active');
//            elem.addClass('active-recent');
//        });
//
//        $document.bind('click', function() {
//            if(!elem.hasClass('active-recent')) {
//                    elem.removeClass('dropdown-active');
//            }
//            elem.removeClass('active-recent');
//        });
//
//    }
//    
//    function controllerFunction($scope){
//    }
//    
//    return {
//        restrict: "C",
//        scope:{
//            canvasId: '@',
//            anchorId: '@',
//            titleLink:'@',
//            extension:'@'
//        },
//        priority: 1001,
//        //templateUrl: 'htmlPartials/menu.html',
//        //controller: controllerFunction,
//        link: linkFunction
//    };
//});

