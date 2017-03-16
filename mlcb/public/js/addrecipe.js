(function () {

    function init(){    
        $("#addRecipeBtn").on("click",addRecipe)
        console.log("chargement Ajax : " + new Date());
    }

    function addRecipe(e){
        e.preventDefault();
        e.stopPropagation();
        $.ajax({
            url: '/recipe/add',
            type: 'POST',
            //contentType:'application/json',
            data: {
                name : addRecipeForm.name.value,
                serving : addRecipeForm.serving.value,
                container : addRecipeForm.container.value
            },
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