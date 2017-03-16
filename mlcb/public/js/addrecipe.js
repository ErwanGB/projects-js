(function () {

    function init(){    
        $("#addRecipeBtn").on("click",addRecipe)
        console.log("chargement Ajax : " + new Date());
    }

    function addRecipe(e){
        e.preventDefault();
        e.stopPropagation();
        var data = {};
        data.name = addRecipeForm.name.value;
        data.serving = addRecipeForm.serving.value;
        data.container = addRecipeForm.container.value;

        $.ajax({
            url: '/recipe/add',
            type: 'POST',
            contentType:'application/json',            
            data: JSON.stringify(data),
            success: postRecipeSuccessHandler,
            error: function(a,b,c){console.log(a + " " + b + " " + c)},
            //complete: postCommentSuccessHandler
        });
    }

    function postRecipeSuccessHandler(jsonData){
        console.log("Ajax Succes")
    }

//init on document ready
$(document).ready(init);
})();