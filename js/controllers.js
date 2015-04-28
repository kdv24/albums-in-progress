var artistControllers = angular.module('artistControllers',
  ['firebase']);

artistControllers.controller("FirebaseController",
  ["$scope", "$firebaseArray",
  function($scope, $firebaseArray) {
    var ref = new Firebase("https://popping-heat-6371.firebaseio.com");

    $scope.sync = $firebaseArray(ref);

    $scope.addAlbum = function() {
      var message = "";
      var newtitle = $scope.newname;
      var newartist = $scope.newartist;

      $scope.sync.$add(
        {
        title: newtitle,
        artist: newartist,
        shortname: null,
        description: null
        });

      // $scope.albums
    }
  }
]);





// artistControllers.controller('ListController', ['$scope', '$http', function ($scope, $http, $firebase) {
// $http.get('js/data.json').success(function(data) {
//         $scope.albums = data;
//         $scope.artistOrder = 'artist';
//     });
// }]);

artistControllers.controller('DetailsController', ['$scope', '$http','$routeParams', function ($scope, $http, $routeParams, $firebase) {
$http.get('js/data.json').success(function(data) {
        $scope.albums = data;
        $scope.whichItem = $routeParams.itemId;
    });
}]);

artistControllers.controller('NewAlbumController', ['$scope', '$http', function ($scope, $http, $firebase) {
    $http.post('js/data.json', {"title": "{{album.title}}", "artist": "{{album.artist}}" }).success(function(data) {
            $scope.albums = data;
        }).
        error(function(data) {
            alert("This didn't work...");
        });
}]);

//DATABASE~~~~~~~~~~~~~~~
// var firebasedb = angular.module('sampleApp', ['firebase']);
