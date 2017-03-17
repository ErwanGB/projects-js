var request = require('request');
var cheerio = require('cheerio');
var URL = require('url-parse');


var pageToVisit = "http://www.marmiton.org/recettes/recette_the-tarte-au-citron-meringuee_22082.aspx";
console.log("Visiting page " + pageToVisit);
request(pageToVisit, function(error, response, body) {
   if(error) {
     console.log("Error: " + error);
   }
   // Check status code (200 is HTTP OK)
   console.log("Status code: " + response.statusCode);
   if(response.statusCode === 200) {
     // Parse the document body
     var $ = cheerio.load(body);
     var result = $('.m_content_recette_ingredients').text();
     console.log("Page title:  " + result);
     var splitted = result.match(/\w+(?=-)/g);
     console.log(splitted);
     
   }
});