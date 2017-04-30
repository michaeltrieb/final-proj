// var weather;
//
// var api = {
//   root: "",
//   token: "&APPID=13eeec9d2cd2858ebd74350eca9802c2",
//   unit: "&units=imperial"
// }


// Update DOM with user input on button submission

$(document).ready(function() {

    // // GeoLocation code/Pertains to grabbing user's location from the browser
    // var options = {
    //     enableHighAccuracy: true,
    //     timeout: 5000,
    //     maximumAge: 0
    // };
    //
    // function success(pos) {
    //     var position = pos.coords;
    //
    //     var lat = position.latitude;    // Store user's latitude
    //     var long = position.longitude;  // Store user's longitude
    // };
    //
    // function error(err) {
    //     console.warn(`ERROR(${err.code}): ${err.message}`);
    // };
    //
    // //Retrieve user coordinates
    // navigator.geolocation.getCurrentPosition(success, error, options);

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
                    case "Thunderstorm":
                        youtubeID = "uJ6QHfZwTSw"; // Youtube ID
                        break;
                    case "Drizzle":
                    case "Rain":
                        youtubeID = "nAK9Pj5-QXY"; // Youtube ID
                        break;
                    case "Snow":
                        youtubeID = "BxwAPBxc0lU"; //Youtube ID
                        break;
                    case "Atmosphere":
                        youtubeID = "GyxoQIQaogE"; //Youtube ID
                        break;
                    case "Clear":
                        youtubeID = "cRES6Af_Wyg"; //Youtube ID
                        break;
                    case "Clouds":
                        youtubeID = "2vv5bp88I2g"; //Youtube ID
                        break;
                    case "Extreme":
                        youtubeID = "Q-i1XZc8ZwA"; //Youtube ID
                        break;
                    case "Additional":
                        youtubeID = "6Ejga4kJUts"; //Youtube ID
                        break;
                    default:
                        youtubeID = "rLTcnB5Gehw";
                        break;
                }

                var youtubeEmbedURL = "https://www.youtube.com/embed/"+youtubeID;

                $("#weatherSong").attr("src", youtubeEmbedURL);
                $("#weatherSong").css({"display" : "block"});
                console.log(weatherData);

                var city = weatherData.name;
                $("#headerText").html("The <em>PERFECT</em> song for people of "+city+"!");
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
