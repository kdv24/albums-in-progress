var myApp = angular.module('myApp', [
    'ngRoute',
    'artistControllers',
    'firebase',
]);

myApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
    when('/list', {
        templateUrl: 'partials/list.html',
        controller: 'FirebaseController'
    }).
    when('/details/:itemId', {
        templateUrl: 'partials/details.html',
        controller: 'DetailsController'
    }).
    when('/new-album', {
        templateUrl: 'partials/new-album.html',
        controller: 'FirebaseController'
    }).
    otherwise({
        redirectTo: '/list'
    });
}]);


myApp.directive("enter", function() {
    return function (scope, element, attrs) {
        element.bind("mouseenter", function () {
            element.addClass(attrs.enter);
        });
        element.bind("mouseleave", function(){
               element.removeClass(attrs.leave)
             });
    };
});
