(function () {

  function init(){
      getHotels(); 
      getAvg();
      getCapa();
      $('#container #listHotels').before("<div class='stats'><span id='avg'></span><span id='capa'></span></div>")
  }

// Fill table with data
function getHotels() {
    // Empty content string
    var tableContent = '';

    var cp = $('#listHotels').attr('data-id');
    // jQuery AJAX call for JSON
    $.getJSON( '/ville/'+ cp + '/hotels', function( data ) {

        // For each this.fields in our JSON, add a table row and cells to the content string
        $.each(data, function(){
            tableContent += "<tr>";
            tableContent += "<td><a href='/hotel/"+ this.recordid + "'>" + this.fields.nom_commercial + "</a></td>";
            tableContent += "<td>" + this.fields.commune + "</a></td>";
            tableContent += "<td>" + this.fields.code_postal + "</td>";
            tableContent += "<td>" + getStars(this.fields.note) + "</td>";
            tableContent += "</tr>";
        });

        // Inject the whole content string into our existing HTML table
        $('#container #listHotels').html(tableContent);
    });

};

function getAvg(){
    var cp = $('#listHotels').attr('data-id');
    $.getJSON('/hotels/' + cp + '/statistiques/moyenne', function( data ) {
        var avg = getStars(Math.round(data.res))
        $('#avg').html("<span> Classement moyen</span> :" + avg);
    })
}

function getCapa(){
    var cp = $('#listHotels').attr('data-id');
    $.getJSON('/hotels/' + cp + '/statistiques/capacite', function( data ) {
        var capa = data.res
        $('#capa').html("<span> Capacité totale</span> :" + capa);
    })
}

function getStars(nb){
    var res = ''
    for (var i = 0 ; i < nb ; i++){
        res+= "<i class='icon-star'></i>"
    }
    return res;
}

//init on document ready
$(document).ready(init);
})();