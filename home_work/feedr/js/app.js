// API's:
// New York Times
// https://developer.nytimes.com/ 

// Guardian:
// http://open-platform.theguardian.com/explore/

// NewsApi.org
// https://newsapi.org/

// Handlebars templating:
var source = $('#article-template').html();
var template = Handlebars.compile(source);



// 1. Setup AJAX requests to fetch data from each news source
$.ajax({
	type: 'GET',
	url: 'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=807c3429ebae4782b84cd0949344ba03', 
	success: formatNytResponse
})

//1. Setup AJAX requests to fetch data from each news source
$.ajax({
 type: 'GET',
  url: 'https://newsapi.org/v2/top-headlines?country=us&apiKey=fd36beb84e7d4a268925ebdaa50520db', 
  success: formatNewsApiResponse
})

 $.ajax({
  type: 'GET',
   url: 'https://content.guardianapis.com/search?api-key=ef343ce1-0667-4b93-b9fa-75c045ba8c67', 
   success: formatGuardianResponse
 })

//
// 2. Set up functions to handle each of the above AJAX requests:
// - Use Array's .map method to transform the response into an array of objects that you will pass to the Handlebars template
// - Check out the id=article-template in index.html to see what properties the template expects
// - To properly format article dates, use new Date() and the .toLocaleDateString() method
// Note: not all articles will have all the expected properties :D

function formatNytResponse(response) {
  //console.log(response)
  var articles = response.results.map(function(article) {
    var image

    if (article.multimedia[0]){
      image = article.multimedia[0].url;
    }
     else {
      image = 'https://www.nytimes.com/2018/03/28/world/europe/julian-assange-internet-ecuador.html'
    }
    var date = new Date(article.created_date)

    return {
           title: article.title,
           date: date.toLocaleDateString(),
           image: image,
           type: article.section,
           link: article.url,
         //  console.log(articles)
    }
 })
  var articleTemplates = template(articles)
  $('#main'). append(articleTemplates)
}

function formatNewsApiResponse(response) {
  //console.log(response)
  var articles = response.articles.map(function(article) {


    var date = new Date(article.publishedAt)

    return {
           title: article.title,
           date: date.toLocaleDateString(),
           image: article.urlToImage,
           type: article.section,
           link: article.url,
    }
  var articleTemplates = template(articles)
  $('#main'). append(articleTemplates)
}

function formatGuardianResponse(response) {
  //console.log(response)
  var articles = response.response.results.map(function(article) {
    var image = 'https://legallabrador.org/wp-content/uploads/2016/01/Duck-cinnamon-teal.jpg'

    var date = new Date(article.webPublicationDate)

    return {
           title: article.webTitle,
           date: date.toLocaleDateString(),
           image: image,
           type: article.type,
           link: article.webUrl,
    }
  })
  var articleTemplates = template(articles)
  $('#main'). append(articleTemplates)
}

