function submited(){
	var firstname = document.forms["excellent"]["fname"].value;
	var lastname = document.forms["excellent"]["lname"].value;
	var  age = document.forms["excellent"]["age"].value;
	var email = document.forms["excellent"]["email"].value;
	var gender = document.forms["excellent"]["gender"].value;
	var language = document.forms["excellent"]["lang"].value;

	if (firstname == "") {
		alert("Please enter your First Name");
	}
	else if (firstname.length < 4 || firstname.length > 20) {
		alert("First name should be between 4 and 20 character");
	}


	if (lastname == "") {
		alert("Please enter your Last Name");
	}
	else if (lastname.length < 4 || lastnamename.length > 20) {
		alert("Last name should be between 4 and 20 character");
	}


	if (age == ""){
		alert("Please enter your Age");
	}

	if (gender == ""){
		alert("Please enter your Gender");
	}

	if (language == "") {
		alert("Plaese enter your known language");
	}
	
}