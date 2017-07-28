const tod = ['am', 'pm'];
const hours = ['twelve', 'one', 'two', 'three', 'four', 'five', 'six', 'seven',
'eight', 'nine', 'ten', 'eleven', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
'seventeen', 'eighteen', 'nineteen'];
const minutes = ['oh', 'twenty', 'thirty', 'forty', 'fifty', 'sixty'];

const validateUserTime = (usrTime) => {
    const validRegex = /^\d?\d:?\d{2}$/
    return validRegex.test(usrTime);
}

const displayError = (usrTime) => {
    const response = document.getElementById('clockResponse');

    if (usrTime == "") {
        usrTime = 'Nothing';
    }

    response.classList.add('error');
    response.innerHTML = `"${usrTime}" is not a valid 24-hour time.`;
}

const formatTime = (usrTime) => {
    /* Formats the time to always follow the format: ##:## */

    // If user input is #:##
    if(usrTime.includes(':') && usrTime.length == 4) {
        usrTime = '0'.concat(usrTime);
    // If user input is ####
    } else if (!usrTime.includes(':') && usrTime.length == 4) {
        usrTime = usrTime.substr(0,2) + ':' + usrTime.substr(2);
    // If user input is ###
    } else {
        usrTime = '0' + usrTime.substr(0,1) + ':' + usrTime.substr(1);
    }

    return usrTime;
}

const displayTime = (usrTime) => {
    if(usrTime.length < 5) {
        usrTime = formatTime(usrTime);
    }
    // TODO: Convert usrTime (numerical) to English (alphabetical).
}

document.getElementById("btnGetTime").onclick = () =>  {
    const response = document.getElementById('clockResponse');

    if(response.classList.contains('error')) {
        response.innerHTML = '';
        response.classList.remove('error');
    }

    const usrTime = document.getElementById("txtTime").value;

    if (validateUserTime(usrTime) == false) {
        displayError(usrTime);
    } else {
        displayTime(usrTime);
    }
}