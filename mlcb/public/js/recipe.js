(function () {

    function init(){    
        oneRecipe();
    }

    function oneRecipe(){

        $('#container article').empty();

        var id = $('#container article').attr("data-id");
        var content = '';

        $.getJSON('/recipe/one/'+ id, function(data){
            content += "<h1>" + data.name + "</h1>";
            content += "<div>" + data.serving + "</div>"
            content += "<div>" + data.container + "</div>";
            content += "Liste des ingrédients";
            content += "<ul>";

            for (var ing of data.ingredients){
                content += "<li>"
                content += ing.qty + " ";
                content += ing.unit + " ";
                content += ing.type + " ";
                content += "</li>"
            }

            content += "</ul>"
            content += "<ul>"

            for (var stp of data.steps){
                content += "<li>"
                content += stp.order;
                content += "/ ";
                content += stp.step + " ";
                content += "</li>"
            }


            content += "</ul>"

            $('#container article').html(content);
        })
    }




//init on document ready
$(document).ready(init);
})();