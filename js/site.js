// get the user input from the page
// Controller function
function getValues() {

    // get the values from the page
    let startValue = document.getElementById('startValue').value;

    let endingValue = document.getElementById('endingValue').value;

    let fizzValue = document.getElementById('fizzValue').value;

    let buzzValue = document.getElementById('buzzValue').value;

    // parse string into ints
    startValue = parseInt(startValue);

    endingValue = parseInt(endingValue);

    fizzValue = parseInt(fizzValue);

    buzzValue = parseInt(buzzValue);

    // verify inputs are numbers
    if (Number.isInteger(startValue) && Number.isInteger(endingValue) && Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) {
        // if they are, generate numbers
        let fizzBuzzArray = generateFizzBuzz(startValue, endingValue, fizzValue, buzzValue);

        // then display them on the page
        displayFizzBuzz(fizzBuzzArray);

    } else if (startValue <= 0) {
        // if the start is less than or equal to 0, tell our user!
        Swal.fire(
            {
                icon: 'error',
                title: 'Oops!',
                text: 'Only whole numbers greater than 0 are allowed for FizzBuzz!'
            }
        );
    } else {
        // if they are not, tell our user!
        Swal.fire(
            {
                icon: 'error',
                title: 'Oops!',
                text: 'Only whole numbers are allowed for FizzBuzz!'
            }
        );
    }
}

// generate our numbers
// Logic function
function generateFizzBuzz(start, end, fizz, buzz) {

    let tableHTML = '';

    for (let i = start; i <= end; i++) {
        let value = i;
        let className = '';

        if (value % fizz === 0 && value % buzz === 0 && value != 0) {
            value = 'FizzBuzz';
            className = 'fizzBuzz';
        } else if (value % buzz === 0 && value != 0) {
            value = 'Buzz';
            className = 'buzz';
        } else if (value % fizz === 0 && value != 0) {
            value = 'Fizz';
            className = 'fizz';
        }

        if (i % 5 === 0) {
            tableHTML += '<tr>';
        }

        let tableRow = `<td class='${className}'>${value}</td>`;
        tableHTML += tableRow;

        if ((i + 1) % 5 === 0) {
            tableHTML += '</tr>';
        }
    }

    return tableHTML;
}

// display them on the page
// View function
function displayFizzBuzz(arr) {

    let tableBody = document.getElementById('results');

    tableBody.innerHTML = arr;

}