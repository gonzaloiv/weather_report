$(document).ready(function () {

    getLocation();

    function getLocation() {
        $.get("http://ipinfo.io", function (location) {

            console.log(location);

            // call to the weather function
            getWeather(location.loc);

            // DOM modification
            $('.city').append('here in ' + location.city);
        }, "jsonp");
    }

    function getWeather(loc) {
        lat = loc.split(",")[0] //.toString();
        lon = loc.split(",")[1] //.toString();

        var weatherApiUrl = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon;

        $.get(weatherApiUrl, function (weather) {

            console.log(weather);

            // var for temperature
            var temperature = weather.main.temp;
            temperature =
                parseFloat((temperature - 272.15)).toFixed(1);

            // var for the description
            var today;
            today = weather.weather[0].description;

            // call to the background function
            var code;
            code = weather.weather[0].id;

            setBackground(code);

            // message on the view
            $('.weather').append(
                temperature + ' Cº and ' + today
            );
        }, "jsonp");
        
    };

    function setBackground(id) {

        var back;
        var body = $('body');

        back = 'http://mcritica.com/wp-content/uploads/2015/07/cloud.jpg';
        
        'http://mcritica.com/wp-content/uploads/2015/07/rain.jpg'

        'http://mcritica.com/wp-content/uploads/2015/07/snow.jpg'
        
        
        'http://mcritica.com/wp-content/uploads/2015/07/storm.jpg'
        
        'http://mcritica.com/wp-content/uploads/2015/07/sun.jpg'
        
        body.css('background', 'url('+back+') no-repeat center center fixed ');

    };

});

$(document).ready(function () {

});
