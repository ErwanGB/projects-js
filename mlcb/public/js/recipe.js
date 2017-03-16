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
            content += "<div>" + data.servings + "</div>"
            content += "<div>" + data.container + "</div>";
            $('#container article').html(content);
        })
    }


//init on document ready
$(document).ready(init);
})();