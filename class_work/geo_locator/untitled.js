/* 
  Part Two: Render a Google Map/Marker

  1. Create a function, "buildMap", that takes two arguments: "latitude" and "longitude"
  2. Inside "buildMap", create a new Google map using the "latitude" and "longitude" arguments passed in (refer to previous hw for help)
  3. Also inside "buildMap", create a new map marker using the same "latitude" and "longitude" arguments passed in
  4. Call the function, "buildMap", from within "handleResponse" above (be sure to pass it the correct arguments)
  5. If successful, you should be rendering a google map/marker of your current location
*/
function fetchWeather(latitude, longitude){
  URL = 'http://api.openweathermap.org/data/2.5/weather?q=new+york,us&units=imperial&APPID=999ab1216f41a7f4f11c326d526bc5f9'
}
$.ajax({
  type: 'GET',
  url: URL,
  success: function(response)
});
function handleSuccess(response) {
  console.log(response)
}


/* 
  Part Three: Fetch weather data from Open Weather Maps

  1. Create a function, "fetchWeather", that takes two arugments: "latitude" and "longitude"
  2. Inside this function, first create a variable, "URL", set equal to the following (add your API key)
  
    'http://api.openweathermap.org/data/2.5/weather?units=imperial&lat=' + latitude + '&lon=' + longitude + '&APPID=YOUR_API_KEY_HERE'

  3. Next, make an AJAX request to this URL - ensure it is a "GET" request
  4. Also ensure your AJAX request has a "success" handler (see open_weather_map)
  5. This "success" handler function should use DOM manipulation to append the current temperature into #weather
  6. Call the function, "fetchWeather", from within "handleResponse" above (be sure to pass it the correct arguments)
*/
