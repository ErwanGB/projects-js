var request = require('request');
var cheerio = require('cheerio');
var URL = require('url-parse');
var start_url = "http://www.marmiton.org/recettes/top-internautes.aspx"

var ingList = []


crawl(start_url,true)



function crawl(current_url,rootpage,count){
  console.log("Visiting page " + current_url);
  request(current_url, function (error, response, body) {
    if (error) {
      console.log("Error: " + error);
    }
    // Check status code (200 is HTTP OK)
    console.log("Status code: " + response.statusCode);
    if (response.statusCode === 200) {
      // Parse the document body
      var $ = cheerio.load(body);
      if(rootpage){
        collectInternalLinks($)
      }else{
        getIngredients($,function(){
          getThemAll(count)
        });
      }
    }
  });
}

function getIngredients($,callback){
      var result = $('.m_content_recette_ingredients').text();
      var splitted = result.match(/\d+([a-zA-a\séèàï'ôêëîâ]+)/g);
      for (var item of splitted){
        item = item.replace(/\d*\s[c|g|k|L]l?g?\sd?[e']?\s?/,'')
        item = item.replace(/\d+\s/,'')
        item = item.replace(/cuillère\sà\ssoupe\sde\s/,'')
        item = item.replace(/cuillère\sà\scafé\sde\s/,'')
        item = item.replace(/cube\sde\s/,'')
        item = item.trim();

        if (item.length>2 && item != "personnes"){
          ingList.push(item);          
        }

      }
      console.log("Got Ingredients");
      callback();
}

var allLinks = [];
function collectInternalLinks($) {


  var relativeLinks = $(".m-lsting-recipe a[href^='/']");

  relativeLinks.each(function() {
    var link = $(this).attr('href')
    if(link.match(/\/recettes/)){
      allLinks.push(link);
      console.log(link);
    }
  });

  console.log("Found " + allLinks.length + " relative links");

  getThemAll(0);
}

var count = 0
function getThemAll(count){
    var links = allLinks
    if(count < 50){
      count++
      crawl("http://www.marmiton.org" + links[count],false,count)
    }else{
      result();
    }
}

function result(){
  console.log(ingList)
}