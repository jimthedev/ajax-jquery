$(function(){
  console.log('DOM IS READY');

  // $.ajax returns a promise as of jQuery 3
  var requestPlayers = $.ajax({
    url: "assets/players.json"
  });

  // Another promise to get some data, not that the data is not
  // fetched until .then is fired
  var requestGames = $.ajax({
    url: "assets/games.json"
  });

  // A promise is simply an object that has a .then method
  // and a .catch method, query has a bunch of other stuff
  // on their promises as well.
  console.log(requestPlayers);

  // FIRE THE LAZARS!!!!
  // The total time for the .then callback to run will be the longest
  // of the two ajax requests
  // Jquery uses $.when instead of Promise.all, but they do the same
  // thing.
  $.when(requestPlayers, requestGames).then(function(playersResponse, gamesResponse){

    console.log('Both players and games have responded');
    var players = playersResponse[0];
    var games = gamesResponse[0];

    // Render players
    for ( player in players ) {
      var newPlayer = $("<li></li>");
      newPlayer.text(player + ': ' + players[player].status)
      $('#players').append(newPlayer);
    }

    // Render games
    games.tonight.map(function(game) {
      var newGame = $("<li></li>");
      newGame.text(game.a + ' vs. ' + game.b);
      $('#games').append(newGame);
    })

  }).catch(function(req, status, err){
    console.error(err);
  });

})
