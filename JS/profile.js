//WHEN CLICKING ON LOGO
function home()
{
    location.assign("home.html");
}
///////////////////////////////////////

//HIDE AND SHOW OF LOG BUTTONS
if ($_C().getCookie("userVisit") == 1) {
    $("#name").html($_C().getCookie("UserName"));
    $("#logBtn").hide();
    $("#regesterBTN").hide();
}
else {
    $("#logoutBTN").hide();
}


function logout() {

    $_C().setCookie("userVisit", 0);
    location.assign("home.html");

}

//////////////////////////////////////

//WHEN CLICKING ON TRIP ANCHOR
function checkTrip(){
    if($_C().getCookie("FromStation")==""||$_C().getCookie("Price")==""||$_C().getCookie("number_of_chair")==""|| ($_C().getCookie("ConfirmFlag") == 0))
    {
        alert("You haven't booked a trip yet!");
        return false;
    }
    location.assign("trips.html");
}

function checkLoggedIn() {
    if($_C().getCookie("userVisit") != 1)
    {
        alert("You are not logged in please login and try again :)");
    }
    else
    {
        checkTrip();
    } 
}


////////////////////////////////////

//WHEN CLICKING ON PROFILE ANCHOR
function check() {
    if ($_C().getCookie("userVisit") == 1) {
        location.assign("profile.html");
    }
    else {
        alert("You are not logged in please login and try again :)");
    }
}


////////////////////////////////////

//WHEN CLICKING ON LINES ANCHOR
function checklines() {
    if ($_C().getCookie("userVisit") == 1) {
        location.assign("lines.html");
    }
    else {
        alert("You are not logged in please login and try again :)");
    }
}


////////////////////////////////////

//WHEN NAVIGATING IN URL WITHOUT LOG IN
function checkl() {
    if ($_C().getCookie("userVisit") != 1) {
        // alert("You are not logged in please login and try again :)");
        location.assign("login.html");
    }
}

//////////////////////////////////

//DISPLAY USER INFO IN FORM
(function() {
    $("#UserName").val($_C().getCookie("UserName"));
    $("#UserEmail").val($_C().getCookie("useremail"));
    $("#UserPassword").val($_C().getCookie("userPassword"));
    if($_C().getCookie("usergender")=="Male")
    {
        $("#profileImg").attr("src", "/img/profile/male-profile.png");
    }
    else
    {
        $("#profileImg").attr("src", "/img/profile/female-profile.png");
    }
})();


//////////////////////////////////

//EDITING USER INFO IN FORM
function edit() {
    $("#saveBtn").show();
    $("#editBtn").hide();
    if($_C().getCookie("usergender")=="Male")
    {
        $("#profileImg").attr("src", "/img/profile/male-edit.png");
    }
    else
    {
        $("#profileImg").attr("src", "/img/profile/female-edit.png");
    }
    //$("#profileImg").attr("src", "/img/profile/edit_profile.jpg");
    $("#UserName").removeAttr("disabled");
    $("#UserEmail").removeAttr("disabled");
    $("#UserPassword").removeAttr("disabled");
}


//////////////////////////////////

//SAVING USER INFO IN FORM (SETTING COOKIES)
function savee() {
    $_C().setCookie("UserName", $("#UserName").val());
    $_C().setCookie("useremail", $("#UserEmail").val());
    $_C().setCookie("userPassword", $("#UserPassword").val());
    alert("Saved");
    location.reload();
}


//////////////////////////////////

//RESERVING ONE TRIP WITH NO OVERWRITE
//CONFIRMATION ON RE-BOOKING
if($_C().getCookie("ConfirmFlag")== 1)
{ 
    $("#Lines").click(function(){
        var rebook = confirm("Are you sure you want to re-book and cancel your current booked trip?");
        if(rebook==true)
        {
            $_C().DeleteCookie("FromLine");
            $_C().DeleteCookie("FromStation");
            $_C().DeleteCookie("ToLine");
            $_C().DeleteCookie("ToStation");
            $_C().DeleteCookie("Price");
            $_C().DeleteCookie("number_of_chair");
            $_C().DeleteCookie("ConfirmFlag");
            location.assign("lines.html");
        }
        else {location.reload();}
    });
}
