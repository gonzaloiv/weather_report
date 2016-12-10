var app = {

  getLocation: function() {
    $.ajax({
      url: "http://ipinfo.io",
      method: "GET",
      dataType: 'json'
    }).done(function(location) {
      console.log(location);
      // call to the weather function
      app.getWeather(location.loc);
      // DOM modification
      $('.city').append('here in ' + location.city);
    }).fail(function() {
      $('.city').append('Wooops...');
    })
  },

  getWeather: function(loc) {
    var lat = loc.split(",")[0];
    var lon = loc.split(",")[1];

    var weatherApiUrl = env.apiUrl + '?lat=' + lat + '&lon=' + lon;

    $.get(weatherApiUrl, function(weather) {

      console.log(weather);

      // var for temperature
      var temperature = weather.app.temp;
      temperature =
        parseFloat((temperature - 272.15)).toFixed(1);

      // var for the description
      var today;
      today = weather.weather[0].description;

      // call to the background function
      var code;
      code = weather.weather[0].id;
      app.setBackground(code);

      // message on the view
      $('.weather').append(
        temperature + ' Cº and ' + today
      );

    }, "jsonp");

  },

  setBackground: function(id) {
    var back = 'http://mcritica.com/wp-content/uploads/2015/07/sun.jpg';
    var body = $('html');
    if (id > 290 && id < 590) back = 'http://mcritica.com/wp-content/uploads/2015/07/rain.jpg';
    else if (id > 590 && id < 650) back = 'http://mcritica.com/wp-content/uploads/2015/07/snow.jpg';
    else if (id > 690 && id < 790) back = 'http://mcritica.com/wp-content/uploads/2015/07/storm.jpg';
    else if (id > 699 && id < 800) back = 'http://mcritica.com/wp-content/uploads/2015/07/cloud.jpg';
    body.css('background', 'url(' + back + ') no-repeat center center fixed ');
  }

}

app.getLocation();