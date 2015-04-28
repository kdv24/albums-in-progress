myApp.factory('AlbumsFactory', function AlbumsFactory() {
    var factory = {};
    factory.albums = [];

    factory.addAlbum = function(newtitle, newartist) {
      var album = {title: newtitle, artist: newartist};
      factory.albums.push(album);
    });
return factory;
});



var ref = new Firebase("https://popping-heat-6371.firebaseio.com");

$scope.sync = $firebaseArray(ref);

$scope.sync.$add(
  {
  title: newtitle,
  artist: newartist,
  shortname: null,
  description: null
  });
