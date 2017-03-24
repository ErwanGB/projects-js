function getSingleHotel(){

    var tableContent = '';
    var hotelid = $(this).attr("data-id");

    $.getJSON('/hotel/'+ hotelid,function(data){
        tableContent += "<article>"
        tableContent += "<h1>" + data.fields.nom_commercial + "</h1>";
        tableContent += "<div>" + data.fields.adresse + "<br/>" + data.fields.code_postal + " " + data.fields.commune + "</div>";
        tableContent += "<div>" + data.fields.telephone + "<br/>";
        tableContent += data.fields.site_internet+ "</div>";
        tableContent += "<div>Nombre de chambres : " + data.fields.capacite_d_accueil_personnes + "<br/>";
        tableContent += "Capacité : " + data.fields.nombre_de_chambres + "</div>";
        tableContent += "<div>" + "Lng : " + data.fields.lng  + " | Lat : " + data.fields.lat+ "</div>";
        tableContent += "</article>"
        $('#fiche').html(tableContent);
        getComments(hotelid);
    })
}