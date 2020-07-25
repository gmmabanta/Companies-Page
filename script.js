$(document).ready(function(){
    $('input[type="checkbox"]').click(function(){
        var name = $(this).attr("data-filter");
        console.log(name);
        if($(this).prop("checked") == false){
            $(".col-lg-4").show("2000");
        }else{
            $(".col-lg-4").not("."+name).hide("2000");
            $(".col-lg-4").filter("."+name).show("2000");
        }
    })
})

