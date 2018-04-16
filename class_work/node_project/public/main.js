//console.log("I am Javascript running on the frontend")


  // $.ajax({
  //   url: '/geo',
  //   type: 'GET',
  //   success: function (response) {
  //     console.log(response)
  //        document.write()'<p>' + response
  //   }
  // })

  navigator.geolocation.getCurrentPosition(function(position) {
    console.log(position)

    var lat = position.coords.latitude
    var lng = position.coords.longitude
    fetchGeoWeather(lat, lng);
   // console.log(lat, lng)
  })

  function fetchGeoWeather(lat, lng) {
    $.ajax({
      url: '/coords/lat/' + lat + '/lng/' + lng,
      type: 'GET',
      success: function(response)  {
        console.log(response)
      },
    })
  }



  function handleSuccess(response) {
   console.log(response)
    $('#weather').append('Temperature' + ' ' + response.main.temp + ' Humidity' + ' ' + response.main.humidity + ' ' + 'Wind Speed' + ' ' + response.wind.speed)
      if(response.main.temp >= 40) {
       $("body").css("background", "https://upload.wikimedia.org/wikipedia/commons/4/4e/Cumulonimbus_Clouds_seen_from_SCTEX.jpg")
      } else {
        $("body").css("background", "https://images.pexels.com/photos/158163/clouds-cloudporn-weather-lookup-158163.jpeg?auto=compress&cs=tinysrgb&h=350")
 };

  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.7127, lng: -74.0059},
    zoom: 12
})
}