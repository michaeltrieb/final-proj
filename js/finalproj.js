// var weather;
//
// var api = {
//   root: "",
//   token: "&APPID=13eeec9d2cd2858ebd74350eca9802c2",
//   unit: "&units=imperial"
// }


// Update DOM with user input on button submission

$(document).ready(function() {

    $("#userZipCode").submit(function(event) {
        event.preventDefault();

        // zip code input value
        var zipInput = $('#zip').val();

        //API Variables
        var APIPath = "http://api.openweathermap.org/data/2.5/weather";
        var APIKey = "13eeec9d2cd2858ebd74350eca9802c2";

        //Build API Request Path

        var RequestPath = APIPath+"?zip="+zipInput+"&APPID="+APIKey;

        $.getJSON( RequestPath ).done(

            //Weather Data Function
            function( weatherData ) {

                //Get Main Description of Weather
                var description = weatherData.weather[0].main;


                console.log(description);

                // Output
                var youtubeID;
                switch (description) {
                    case ("Rain" || "Shine") :
                        youtubeID = "rxaKVeiBiOE"; // Youtube ID
                        break;
                    case "Sunny":
                        youtubeID = "sunnysong123"; //Youtube ID
                        break;
                    default:
                        youtubeID = "default";
                }

                var youtubeEmbedURL = "https://www.youtube.com/embed/"+youtubeID;

                $("#weatherSong").attr("src", youtubeEmbedURL);
                $("#weatherSong").css({"display" : "block"});

            }
    );

        // Update header section with user input text


    });

});









    // $.each( data.items, function( i, item ) {
    //   $( "<img>" ).attr( "src", item.media.m ).appendTo( "#images" );
    //   if ( i === 3 ) {
    //     return false;
    //   }
