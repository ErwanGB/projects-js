(function () {

    function init(){    
        getAllRecipes();
    }

function getAllRecipes(){
    $("#container").empty(); 
    var content ='<table>';
    $.getJSON('/recipe/allrecipes', function(data){
        $.each(data, function(){
                content += "<tr data-id=" + this._id + ">",
                content += "<td><a class='getOneRecipe'>" + this.name + "</a></td>"
                content += "<td><button class='deleteBtn'>Supprimer</button></td>"
                content += "</tr>"
        })
        $("#container").html(content + "</table>");    
        $(".getOneRecipe").on("click",getOneRecipe);   
        $(".deleteBtn").on("click",deleteOneRecipe);
    })
}

function getOneRecipe(){
    var id = $(this).parent().parent().attr("data-id");
    window.location.href = "/recipe/view/" + id
}

function deleteOneRecipe(){
    var id = $(this).parent().parent().attr("data-id");
    $.ajax({
        url: '/recipe/'+ id + '/del',
        type: 'DELETE',
        complete: function(){
            getAllRecipes();
        }
    });
}


//init on document ready
$(document).ready(init);
})();