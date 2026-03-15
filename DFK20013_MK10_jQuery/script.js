$(document).ready(function(){

    $("#loginForm").submit(function(e){

        e.preventDefault();

        var user = $("#username").val();
        var pass = $("#password").val();

        if(user != "" && pass != "")
        {
            $.mobile.changePage("#successPage");
        }
        else
        {
            $("#popupError").popup("open");
        }

    });

});