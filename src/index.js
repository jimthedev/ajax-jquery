$(function(){
  console.log('DOM IS READY');

  $.ajax({
    url: "assets/players.json"
  }).done(function(response) {
    console.log('DONE!', response);
    // $( this ).addClass( "done" );
    for ( player in response ) {
      console.log();
      var newPlayer = $("<li></li>");
      newPlayer.text(player + ': ' + response[player].status)
      $('#root').append(newPlayer);
    }

  });

})
