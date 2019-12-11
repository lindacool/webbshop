$(document).ready(function() {

$("#basket").on("click", function(){
            
    $(this).siblings().each(function(i) {
        if(i > 0) {
            console.log($(this).prev().html());
            let span = $("<span>").html($(this).prev().html());
            $("#modalcontent").append(span);
        }
    });
    //let p = $('<p>').html("<b>hello</b>");
    
    $("#divmodal, .innerModal").addClass("active");
    


});
// Ta bort class "active"
$(".close, #divmodal").on("click", function() {
    $("#divmodal, .innerModal").removeClass("active");
}); 

});