(function () {

    function init(){    
        getAllRecipes();
        $(".getOneRecipe").on("click",getOneRecipe)
    }

function getAllRecipes(){
    var content ='<table>';
    $.getJSON('/recipe/all', function(data){
        $.each(data, function(){
                content += "<tr data-id=" + this._id + ">",
                content += "<td><a class='getOneRecipe'>" + this.name + "</a></td>"
                content += "<td><button class='deleteBtn'>Supprimer</button></td>"
                content += "</tr>"
        })
        $("#container").html(content + "</table>");
        $(".getOneRecipe").on("click",getOneRecipe)
    })
}

function getOneRecipe(){
   var id = this.parent.attr('data-id');
   console.log(id);
}


//init on document ready
$(document).ready(init);
})();