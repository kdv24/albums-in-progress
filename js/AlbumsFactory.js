myApp.factory('AlbumsFactory', function AlbumsFactory() {
    var factory = {};
    factory.albums = [];

    factory.addAlbum = function(newtitle, newartist) {
      var album = {title: newtitle, artist: newartist};
      factory.albums.push(album);
    });
return factory;
});
