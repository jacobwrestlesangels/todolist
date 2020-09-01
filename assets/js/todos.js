$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(function(){
        $(this).remove();
    });
    event.stopPropagation();
})
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
})

$("input").on("keypress", function(e){
    if(e.which === 13){
        var input = $("input").val();
        $("ul").append('<li><span><i class="far fa-trash-alt"></i></span> ' + input + '</li>');
        $(this).val("");
    }
});

$(".fa-plus").on("click", function(){
    $("input").fadeToggle();
})




