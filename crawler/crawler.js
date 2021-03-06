var request = require('request');
var cheerio = require('cheerio');
var URL = require('url-parse');
//var start_url = "http://www.marmiton.org/recettes/top-internautes.aspx"
//var start_url = "http://www.marmiton.org/recettes/top-internautes-entree.aspx"
//var start_url = "http://www.marmiton.org/recettes/top-internautes-plat-principal.aspx"
var start_url = "http://www.marmiton.org/recettes/top-internautes-dessert.aspx"

var ingList = []

var mongodb = require('mongodb').MongoClient;



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
        item = item.replace(/\d*\s[c|g|k|L|l]l?g?\sd?[e']?\s?/,'')
        item = item.replace(/\d+\s/,'')
        item = item.replace(/cuillères?\sà\ssoupe\sd?[e']\s?/,'')
        item = item.replace(/cuillères?\sà\scafé\sd?[e']\s?/,'')
        item = item.replace(/cube\sde\s/,'')
        item = item.trim();

        if (item.length>2 && item != "personnes"){
          ingList.push({name:item});          
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
    if(count < links.length - 1){
      count++
      crawl("http://www.marmiton.org" + links[count],false,count)
    }else{
      result();
    }
}

function result(){
  console.log(ingList)
  mongodb.connect("mongodb://localhost:27017/mlcb", function(err,db){
    db.collection('ingraw').insertMany(ingList).then(function(err){
                if(err){
                  console.log("GET /ping : " + err)
                }else{
                  console.log("OK");
                }
    })
  })
}