(function () {

    function init(){    
        $("#addRecipeBtn").on("click",addRecipe);
        $("#addIngBtn").on("click",addIngredient);
        $("#addStepBtn").on("click",addStep);
    }

    function addRecipe(e){
        e.preventDefault();
        e.stopPropagation();
        var data = {};
        data.name = addRecipeForm.name.value;
        data.serving = addRecipeForm.serving.value;
        data.container = addRecipeForm.container.value;
        data.ingredients = [];
        data.steps = [];

        $('ul#ingList li').each(function(index){            
            data.ingredients.push({
                'order':index,
                'qty':$(this).find("input[name=qty]").val(),
                'unit':$(this).find("select[name=unit]").val(),
                'type':$(this).find("[name=type]").val()
            })
        })

        $('ul#stepList li').each(function(index){            
            data.steps.push({
                'order':index,
                'step':$(this).find("input[name=step]").val(),
            })
        })

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

    function addIngredient(e){
        e.preventDefault();
        e.stopPropagation();
        var ingredient = '';

        ingredient += "<li>";
        ingredient += "<input type='text' name='qty'/>";
        ingredient += "<select name='unit'>";
        ingredient += "<option value='g'>grammes</options>";
        ingredient += "<option value='cl'>centilitres</options>";
        ingredient += "<option value='p'>pièces</options>";
        ingredient += "</select>";
        ingredient += "<input type='text' name='type'>";
        ingredient += "</li>"        

        $("#ingList").append(ingredient);
    }

    function addStep(e){
        e.preventDefault();
        e.stopPropagation();
        var step = '';

        step += "<li>";
        step += "<input type='text' name='step'/>";
        step += "</li>";

        $("#stepList").append(step);
    }

                  

//init on document ready
$(document).ready(init);
})();