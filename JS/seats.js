///start from 1 to 12
///all chairs
///cookieVal return of getcookie
///intVal return but number
///newVal valeu will be added in cookie "update"
///remain to calculate remain chairs

var numChair;
var totalNum;
totalNum = 12;
var cookieVal, intVal, newVal;
var remain;

///to hold number of chair cookie value for booked chairs still remain
///when i refresh and in case that cookie is expired 
cookieVal = $_C().getCookie("number_of_chair");
if (cookieVal == 0) {
	intVal = 0;

} else {

	intVal = parseInt(cookieVal);
}

for (var i = 1; i <= intVal; i++) { ///to start change new images


	if (i <= 6) { //i 1:6


		document.getElementsByClassName("status")[i - 1].src = "../img/seats/7.png";
	}
	else {  // i 7:12

		document.getElementsByClassName("status")[i - 1].src = "../img/seats/6.png";
	}


}

function bookNow() {
	cookieVal = $_C().getCookie("number_of_chair");
	if (cookieVal == 0) {
		intVal = 0;

	} else {

		intVal = parseInt(cookieVal);
	}

	numChair = parseInt(document.getElementById("num").value); ///to hold input value
	///to be changes remain 
	///عشان الحجز الى القديم يفضل زى ما كان
	if ((document.getElementById("num").value) == "") {
		alert("please enter number");
	}
	else {
		if (intVal != 0) {
			for (var j = 1; j < intVal; j++) {
				// document.getElementsByClassName("status")[j].src = "../img/seats/7.png";
				if (j <= 6) { //i 1:6


					document.getElementsByClassName("status")[j - 1].src = "../img/seats/7.png";
				}
				else {  // i 7:12

					document.getElementsByClassName("status")[j - 1].src = "../img/seats/6.png";
				}

			}
			remain = totalNum - intVal;///12- oldValue of cookie "the first time will be 0 "

			if (numChair <= remain) {
				newVal = numChair + intVal; ///update cookie
				$_C().setCookie("number_of_chair", newVal, 1);
				for (var i = 1; i <= newVal; i++) { ///to start change new images

					if (i <= 6) { //i 1:6


						document.getElementsByClassName("status")[i - 1].src = "../img/seats/7.png";
					}
					else {  // i 7:12

						document.getElementsByClassName("status")[i - 1].src = "../img/seats/6.png";
					}


				}
				alert("Congratulations :) Seats Booking is Done");
			}
			else { alert("Please enter less number of seats :("); }

		}
		//in case intVal=0			 
		else {

			remain = totalNum - intVal;///12- oldValue of cookie "the first time will be 0 "

			if (numChair <= remain) {
				newVal = numChair + intVal; ///update cookie
				$_C().setCookie("number_of_chair", newVal);
				for (var i = 1; i <= newVal; i++) { ///to start change new images
					document.getElementsByClassName("status")[i - 1].src = "../img/seats/7.png";

					if (i <= 6) { //i 1:6


						document.getElementsByClassName("status")[i - 1].src = "../img/seats/7.png";
					}
					else {  // i 7:12

						document.getElementsByClassName("status")[i - 1].src = "../img/seats/6.png";
					}

				}
				alert("Congratulation :) Seats Booking is Done");
			} else {
				alert("Please enter less number of seats :)");
			}
		}
	}
}



function cancelBook() {
	cookieVal = $_C().getCookie("number_of_chair");
	if (cookieVal == 0) {
		intVal = 0;

	} else {

		intVal = parseInt(cookieVal);
	}
	numChair = parseInt(document.getElementById("num").value); ///to hold input value
	if (intVal == 0) { alert("No seats here to cancel"); }
	else {
		newVal = intVal - numChair;
		if (numChair <= intVal) {
			$_C().setCookie("number_of_chair", newVal);
			for (var i = 1; i <= numChair; i++) {

				if (i <= 6) { //i 1:6


					document.getElementsByClassName("status")[i - 1].src = "../img/seats/9.png";

				}
				else {  // i 7:12

					document.getElementsByClassName("status")[i - 1].src = "../img/seats/8.png";
				}



			}
			alert("Cancelation Done");
			location.reload();
		} else { alert("Not cancelled :("); }
	}

}



$(".arrowBtn").click(function () {
	var arrowClass = $(".arrowBtn i").attr("class");

	if (arrowClass == "fas fa-angle-down") {
		$(".imgDiv").css({ "overflow": "visible", "height": "100%" });
		$(".arrowBtn i").removeClass().addClass("fas fa-angle-up");
		var arrowClass = $(".arrowBtn i").attr("class");
	}

	else {
		$(".imgDiv").css({ "overflow": "hidden", "height": "520px" });
		$(".arrowBtn i").removeClass().addClass("fas fa-angle-down");
	}
});


$("#ticketBtn").click(function () {
	if ((($_C().getCookie("FromStation") == "") || ($_C().getCookie("Price") == "")) || ($_C().getCookie("number_of_chair") == 0)) {
		alert("You haven't booked a trip yet!");
		return false;
	}
	location.assign("Ticket.html");
});

// $("#Trips").click(function () {
// 	if (($_C().getCookie("ConfirmFlag") == 0) && ($_C().getCookie("number_of_chair") == 0)) {
// 		alert("You a trip yet!");
// 		return false;
// 	}
// 	location.assign("trips.html");

// });

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
