
var submit = document.getElementById("submit");
submit.addEventListener('click', reserveSeat, false);

var form = document.getElementById("form");

var seats = document.getElementsByClassName("col-lg-2 col-md-2 col-sm-2 col-xs-2");

for(var i = 0; i < seats.length; i++) {
	seats[i].addEventListener('click', activateForm, false);
}

function activateForm(e) {
	if(e.target.className.includes("taken")) {
		alert("This seat is taken, please select another.");
	}
	else {
		form.style.display = 'block';
		highlightSeat(e);
	}
}

function findSelectedSeat() {
	for(var i=0; i < seats.length; i++) {
		if(seats[i].className.includes("selected")) {
			return i;
		}	
	}
}

function highlightSeat(e) {
	deselectSeats();
	e.target.className = e.target.className + " selected";
}

function deselectSeats() {
	for(var i = 0; i < seats.length; i++) {
		if(!(seats[i].className.includes("taken"))) {
			seats[i].className = "col-lg-2 col-md-2 col-sm-2 col-xs-2";
		}
	}
}

function reserveSeat(e) {
	//this checks that both an email and a name have been entered and returns an alert if not
	var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    e.preventDefault();
    if(name === "") {
        alert("Please enter a valid name.");
        return;
    }
    else if(email === "") {
        alert("Please enter an email address in the format of name@email.com.");
        return;
    }

	var index = findSelectedSeat();
	seats[index].className = "col-lg-2 col-md-2 col-sm-2 col-xs-2";
	seats[index].className += " reserved";
	var seatnum = index +1;
	alert("Seat " + seatnum + " is reserved for you. Enjoy the show!");
}


