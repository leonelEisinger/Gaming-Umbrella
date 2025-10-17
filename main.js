$(document).ready(function(){

    $('#openBTN').on("click", function(){
        console.log("hidding button");
        $('#openBTN').hide();

        setTimeout(`console.log("showing button");
                    $('#openBTN').show();`,1000);
        
    });
});