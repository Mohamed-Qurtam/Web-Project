window.onloaad = pageLoad;
function formValidation() {
    var fname = document.registration.firstname;
    var lname = document.registration.lastname;
    var passid = document.registration.passid;
    var uadd = document.registration.address;
    var tel = document.registration.phone;
    var uemail = document.registration.email;
    var umsex = document.registration.msex;
    var ufsex = document.registration.fsex;

    if (Letters(fname)) {
        if (allLetter(lname)) {
            if (passid_validation(passid)) {
                if (alphanumeric(uadd)) {
                    if (telvalidate(tel)) {
                        if (ValidateEmail(uemail)) {
                            if (validsex(umsex, ufsex)) {
                            }
                        }
                    }
                }
            }
        }
    }
    return false;
}
// JavaScript code for validating first name:

function Letters(fname) {
    var letter = /^[A-Za-z ]+$/;
    if (fname.value.match(letter)) {
        return true;
    }
    else {
        alert('Your first name must have alphabet characters only.');
        fname.focus();
        return false;
    }
}
// JavaScript code for validating last name:

function allLetter(lname) {
    var Letters = /^[A-Za-z ]+$/;
    if (lname.value.match(Letters)) {
        return true;
    }
    else {
        alert('Your last name must have alphabet characters only.');
        lname.focus();
        return false;
    }
}
// JavaScript function for validating password:

function passid_validation(passid) {
    var code = /^(?=[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*[^a-zA-Z0-9 ])(?!.*\s).{8,8}$/g;
    if (passid.value.match(code)) {
        return true;
    }
    else {
        alert("Password does not match. It must consist of only 8 characters:Begins with Upper-case letter, contains at least 1 lower case, 1 number and 1 special character.And not contains white spaces.");
        passid.focus();
        return false;
    }
}

// JavaScript code for validating user address:

function alphanumeric(uadd) {
    var letters = /^[0-9a-zA-Z]+$/;
    if (uadd.value.match(letters)) {
        return true;
    }
    else {
        alert('User address must have alphanumeric characters only.');
        uadd.focus();
        return false;
    }
}

// JavaScript code for validating user Telephone number:

function telvalidate(tel) {
    var num = /^\(?([0-2]{3})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
    if (tel.value.match(num)) {
        return true;
    }
    else {
        alert("The phone_number you have entered is not valide,Try a valide one.");
        tel.focus();
        return false;
    }
}

// JavaScript code for validating gender:

function validsex(umsex, ufsex) {
    x = 0;

    if (umsex.checked) {
        x++;
    } if (ufsex.checked) {
        x++;
    }
    if (x == 0) {
        alert('Select Male/Female');
        umsex.focus();
        return false;
    }
    else {
        return true;
    }
}
// JavaScript code for validating email format:

function ValidateEmail(uemail) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!uemail.value.match(mailformat)) {
        alert("You have entered an invalid email address!");
        uemail.focus();
        return false;
    }
    else {
        alert('Form Successfully Submitted!');
        window.location.reload()
        return true;
    }
}
