(function () {

  function init(){  
    console.log("init fiche hotel")    
    getComments();
    $("#submitCommentBtn").on("click",submitComment)
  }

function getComments(){
    var hotelid = $('#fiche').attr("data-id");
    var content ='';
    $.getJSON('/hotel/' + hotelid  + '/comments', function(data){
        $.each(data, function(){
                content += "<div class='comment'>"
                content += "<span>" + this.auteur + "</span></br>"
                content += this.contenu + "<br/>"
                content += this.date
                content += "</div>"
        })
        $('#comments').html(content);
    })
}

function submitComment(){
    var hotelid = $('#fiche').attr("data-id");
    $.ajax({
        url: '/hotel/'+ hotelid + '/comment',
        type: 'POST',
        data: {
            id : hotelid,
            auteur: addCommentForm.auteur.value,
            contenu: addCommentForm.contenu.value
        },
        success: postCommentSuccessHandler,
        error: function(a,b,c){console.log(a + " " + b + " " + c)},
        complete: postCommentSuccessHandler
    });
}

function postCommentSuccessHandler(jsonData){
    console.log('wait what')
    $('#comments').empty();
    getComments();
}

//init on document ready
$(document).ready(init);
})();