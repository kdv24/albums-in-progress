var artistControllers = angular.module('artistControllers',
  ['firebase',
  'ngAnimate'
  ]);

artistControllers.controller("FirebaseController",
  ["$scope", "$firebaseArray",
  function($scope, $firebaseArray) {
    $scope.albums = AlbumsFactory.albums;

    $scope.addAlbum = function() {
      var newtitle = $scope.newname;
      var newartist = $scope.newartist;
      AlbumsFactory.addAlbum(newtitle, newartist);
      $scope.newname = null;
      $scope.newartist = null;
    };

      $scope.sync.$add(
        {
        title: newtitle,
        artist: newartist,
        shortname: null,
        description: null
        });
    }

    // if ($routeParams.itemID > 0) {
    //     $scope.prevItem = Number($routeParams.itemId) - 1;
    // } else {
    //     $scope.prevItem = $scope.albums.length - 1;
    // }
    //
    // if ($routeParams.itemID < $scope.albums.length - 1) {
    //     $scope.nextItem = Number($routeParams.itemId) + 1;
    // } else {
    //     $scope.nextItem = 0;
    // }
}]);


artistControllers.controller('DetailsController', ['$scope', '$http','$routeParams', function ($scope, $http, $routeParams, $firebase) {
$http.get('js/data.json').success(function(data) {
        $scope.albums = data;
        $scope.whichItem = $routeParams.itemId;
    });
}]);




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
