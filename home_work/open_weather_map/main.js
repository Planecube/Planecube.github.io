/*
Open Weather Map Instructions:

In this exercise, you will be leveraging the Open Weather Map API to fetch weather data for NYC and render the results in the DOM.

1) Setup an AJAX request to the Open Weather Map API:
- This task invovles building an endpoint using your API key, city of choice, and units of choice
- First, grab your API key from https://home.openweathermap.org/api_keys and plug it into API_KEY, below
- Next, add the following query parameters to URL, below:
  * 'q' - stands for 'query' - should be set equal to 'new+york,us'
  * 'units' should be set equal to your units of choice (imperial or metric)
  * 'APPID' should be set equal to API_KEY
- HINT: you will have to rely on string concatenation to build this URL
- CONSIDER: checking out the API docs to learn more about building your endpoint: https://openweathermap.org/current

2) Handle the API's response:
- First, investigate the data you are dealing with and print the AJAX's response using 'console.log(response)'
- Then, use jQuery DOM manipulation - *cough* .append() *cough* - to render the following into #nyc-weather:
  * The temperature
  * The hummidity
  * The wind speed

3) Change the background based on the temperature
- If the weather is good (your opinion) change the background to a happy Mayor de Blasio
- If the weather is bad (also, your opinion) change the background to a not-so-happy Mayor de Blasio

4) Want to be hardcore? Throw in a Google Map based off the response's lat/lng.
*/


// PART 1:
var API_KEY = '999ab1216f41a7f4f11c326d526bc5f9'
var URL = 'http://api.openweathermap.org/data/2.5/weather?q=new+york,us&units=imperial&APPID=999ab1216f41a7f4f11c326d526bc5f9'

// can't touch this - dunnn dun dun dun
$.ajax({
  type: 'GET',
  url: URL,
  success: handleSuccess
})

// PART 2 (and possibly 3 and 4):
function handleSuccess(response) {
  console.log(response)
    $('#nyc-weather').append('Temperature' + ' ' + response.main.temp + ' Humidity' + ' ' + response.main.humidity + ' ' + 'Wind Speed' + ' ' + response.wind.speed)
 if(response.main.temp >= 40){
    $("body").css("background", "url(http://maristpoll.marist.edu/wp-content/uploads/2017/02/RB_2014_01_14_0587_ed-2_Official-Photo-FEATURED-IMAGE.jpg)")
 } else {
    $("body").css("background", "url(http://eagnews.org/wp-content/uploads/2017/09/deBlasiosad.png)")
 }
 //var map = new google.maps.Map(document.getElementById('map'), {
 // center: {lat: 40.7127, lng: -74.0059},
//  zoom: 12
//})
//}
 var map = new google.maps.Map(document.querySelector('#map'), {
//var map = new google.maps.Map(document.getElementById('map'), {
    center: {
    lat: latitude,
    lng: longitude,
    },
    zoom: 12

    });

    var marker = new google.maps.Marker({
      position: {
        lat:latitude, 
        lng: longitude,
      },  
      map: map,
    });
}


