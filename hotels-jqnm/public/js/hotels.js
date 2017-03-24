(function () {

  function init(){
      getAllHotels();

  }

// Fill table with data
function getAllHotels() {

    // Empty content string
    var tableContent = '';

    // jQuery AJAX call for JSON
    $.getJSON( '/hotels', function( data ) {

        // For each this.fields in our JSON, add a table row and cells to the content string
        $.each(data, function(){
            tableContent += "<tr>";
            tableContent += "<td><a href='/hotel/"+ this.recordid + "'>" + this.fields.nom_commercial + "</a></td>";
            tableContent += "<td>" + this.fields.commune + "</a></td>";
            tableContent += "<td>" + getStars(this.fields.note) + "</td>";
            tableContent += "</tr>";
        });

        // Inject the whole content string into our existing HTML table
        $('#container #listHotels').html(tableContent);
    });
};

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