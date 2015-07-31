
var songString = "";

$.ajax({
	url: "javascripts/list.JSON"
}).done(function(data) {
  //console.log(JSON.stringify(data.songs)); 

  for (var i= 0; i < data.songs.length; i++){
    songString += "<h4 class='song-name'>" + data.songs[i].name + "</h4>";
    songString += "<ul><div class='song-artist'>" + data.songs[i].artist + "</div>";
    songString += "<div>|</div>";
    songString += "<div class='song-album'>" + data.songs[i].album + "</div>";
    songString += "<div>" + "|" + "</div>";
    songString += "<div class='song-year'>" + data.songs[i].year + "</div>";
    songString += "<div>" + "|" + "</div>";
    songString += "<div class='song-label'>" + data.songs[i].label + "</div></ul>";

    
    $("#theSongList").html(songString);
         
  } 
});


