const tod = ['am', 'pm'];
const hours = ['twelve', 'one', 'two', 'three', 'four', 'five', 'six', 'seven',
    'eight', 'nine', 'ten', 'eleven', 'thirteen', 'fourteen', 'fifteen',
    'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const minutes = ['oh', 'twenty', 'thirty', 'forty', 'fifty', 'sixty'];

const validateUserTime = (usrTime) => {
    /* Validate return the status of testing param usrTime against
     * a valid regex. */
    const validRegex = /^\d?\d:?\d{2}$/;
    return validRegex.test(usrTime);
};

const generateError = (usrTime) => {
    /* Generate and return an error message for an invalid 24-hour time. */
    if (usrTime === '') {
        usrTime = 'Nothing';
    }

    return `"${usrTime}" is not a valid 24-hour time.`;
};

const formatTime = (usrTime) => {
    /* Formats the time to always follow the format: ##:## */
    // If user input is #:##
    if(usrTime.includes(':') && usrTime.length === 4) {
        usrTime = '0'.concat(usrTime);
    // If user input is ####
    } else if (!usrTime.includes(':') && usrTime.length === 4) {
        usrTime = usrTime.substr(0,2) + ':' + usrTime.substr(2);
    // If user input is ###
    } else {
        usrTime = '0' + usrTime.substr(0,1) + ':' + usrTime.substr(1);
    }

    return usrTime;
};

const generateTime = (usrTime) => {
    /* Format the param usrTime if necessary, then return the English string */
    if(usrTime.length < 5) {
        usrTime = formatTime(usrTime);
    }

    const hrs = Number(usrTime.substring(0,2));
    const tmin = Number(usrTime.substring(3,4));
    const omin = Number(usrTime.substring(4,5));
    console.log('--- DEBUG USRTIME SUBBING ---');
    console.log(hrs);
    console.log(tmin);
    console.log(omin);
    console.log(hours[hrs]);
    console.log(minutes[tmin]);
    console.log(hours[omin]);
};

document.getElementById('btnGetTime').onclick = () =>  {
    /* Flow to validate user input, then display results.  */
    const response = document.getElementById('clockResponse');

    if(response.classList.contains('error')) {
        response.innerHTML = '';
        response.classList.remove('error');
    }

    const usrTime = document.getElementById('txtTime').value;

    if (validateUserTime(usrTime) === false) {
        response.classList.add('error');
        response.innerHTML = generateError(usrTime);
    } else {
        response.innerHTML = generateTime(usrTime);
    }
};
