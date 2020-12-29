var currentTime = new Date();

if ($_C().getCookie("Price") == 5) {
    $("#ticketDiv").css("background-color", "#F1E14F");
    $("#Confirm").css("border-color", "#F1E14F")
    .hover(function(){ $("#Confirm").css("background-color", "#F1E14F")},
    function(){$("#Confirm").css("background-color", "white")})

    $("#back_To_Lines").css("border-color", "#F1E14F")
    .hover(function(){ $("#back_To_Lines").css("background-color", "#F1E14F")},
    function(){$("#back_To_Lines").css("background-color", "white")})   
} 

else if ($_C().getCookie("Price") == 7) 
{
    $("#ticketDiv").css("background-color", "#9FE891");
    $("#Confirm").css("border-color", "#9FE891")
    .hover(function(){ $("#Confirm").css("background-color", "#9FE891")},
    function(){$("#Confirm").css("background-color", "white")})

    $("#back_To_Lines").css("border-color", "#9FE891")
    .hover(function(){ $("#back_To_Lines").css("background-color", "#9FE891")},
    function(){$("#back_To_Lines").css("background-color", "white")}) 
} 

else 
{
    $("#ticketDiv").css("background-color", "#FFB4B4");
    $("#Confirm").css("border-color", "#FFB4B4")
    .hover(function(){ $("#Confirm").css("background-color", "#FFB4B4")},
    function(){$("#Confirm").css("background-color", "white")})

    $("#back_To_Lines").css("border-color", "#FFB4B4")
    .hover(function(){ $("#back_To_Lines").css("background-color", "#FFB4B4")},
    function(){$("#back_To_Lines").css("background-color", "white")}) 
}

$("#From").html($_C().getCookie("FromStation"));
$("#To").html($_C().getCookie("ToStation"));
$("#price").html($_C().getCookie("Price"));

$("#no_Seats").html($_C().getCookie("number_of_chair"));
$("#TotalP").html(($_C().getCookie("number_of_chair")) * ($_C().getCookie("Price")));
$("#Code").html("<p id='Code_paragraph'>Enter This code in any Fawry machine to complete your reservation within 24 hours</p>" + "<p id='codeNum'>9752674714</p>");
$("#time").html(currentTime.getHours() + ":" + currentTime.getMinutes())

$("#back_To_Lines").click(function (e) {
    e.preventDefault();
    $_C().DeleteCookie("FromLine");
    $_C().DeleteCookie("FromStation");
    $_C().DeleteCookie("ToLine");
    $_C().DeleteCookie("ToStation");
    $_C().DeleteCookie("Price");
    $_C().DeleteCookie("number_of_chair");
    location.assign("lines.html");
});

$("#Trips").click(function () {
    if ($_C().getCookie("ConfirmFlag")== 0){
        alert("You should confirm first");
        return false;
    }
    else {
        location.assign("trips.html");
    }
});

$("#Confirm").click(function () {
    $_C().setCookie("ConfirmFlag",1,1);
    location.assign("trips.html");
});
 

if($_C().getCookie("ConfirmFlag")== 0)
{ 
    $("#Lines").click(function(){
        var rebook = confirm("Are you sure you want to start over?");
        if(rebook==true)
        {
            $_C().DeleteCookie("FromLine");
            $_C().DeleteCookie("FromStation");
            $_C().DeleteCookie("ToLine");
            $_C().DeleteCookie("ToStation");
            $_C().DeleteCookie("Price");
            $_C().DeleteCookie("number_of_chair");
            location.assign("lines.html");
        }
        else {location.reload();}
    });
}

