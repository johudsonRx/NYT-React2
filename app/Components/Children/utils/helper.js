// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require('axios');


// / This variable will be pre-programmed with our authentication key (the one we received when we registered)
var authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";


var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q=";

var articleCounter = 0;

// Helper Functions (in this case the only one is runQuery)
var helpers = {

	

	// This function serves our purpose of running the query to geolocate. 
	runQuery: function(numArticles, queryURL){

   var totalURL = queryURL + authKey;v

$.ajax({url: queryURL, method: "GET"}) 
		.done(function(NYTData) {
		
		// Here we are logging the URL so we have access to it for troubleshooting
		console.log("URL: " + queryURL);

		// Here we then log the NYTData to console, where it will show up as an object.
		console.log(NYTData);

		// Loop through and provide the correct number of articles
			// for (var i=0; i<numArticles; i++) {
                
   //                     articleCounter++;      
   //              }

            return axios.get(totalURL)
			.then(function(response){

				console.log(response);
				return response.data.results[0].formatted;
		     })
		});
	},

	// This function hits our own server to retrieve the record of query results
	getArticle: function(){

		return axios.get('/api')
			.then(function(response){

				console.log(response);
				return response;
			});
	},

	// This function posts new searches to our database.
	postArticle: function(location){

		return axios.post('/api', {location: location})
			.then(function(results){

				console.log("Posted to MongoDB");
				return(results);
			})
	}

}


// We export the helpers function 
module.exports = helpers;