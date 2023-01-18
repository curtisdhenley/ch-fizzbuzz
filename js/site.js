// get the user input from the page
// Controller function
function getValues() {

    // get the values from the page
    let count = document.getElementById('count').value;
    let fizzValue = document.getElementById('fizzValue').value;
    let buzzValue = document.getElementById('buzzValue').value;

    // parse string into ints
    count = parseInt(count);
    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);

    // verify inputs are numbers
    if (isNaN(count) && isNaN(fizzValue) && isNaN(buzzValue)) {
        // if they are not, tell our user!
        Swal.fire(
            {
                icon: 'error',
                title: 'Oops!',
                text: 'Only whole numbers are allowed for FizzBuzz!'
            }
        );
    } else if (count > 5000) {
        // if the count is greater than 5000, tell our user!
        Swal.fire(
            {
                icon: 'error',
                title: 'Oops!',
                text: 'Hey pal, I can\'t count that high!'
            }
        );
    } else {
        // if they are numbers, generate numbers
        let fizzBuzzArray = generateFizzBuzz(count, fizzValue, buzzValue);
        // then display them on the page
        displayFizzBuzz(fizzBuzzArray);
    }
}

// generate our numbers
// Logic function
function generateFizzBuzz(end, fizz, buzz) {

    let tableHTML = '';

    for (let i = 1; i <= end; i++) {
        let value = i;
        let className = '';

        if (value % (fizz * buzz) === 0 && value != 0) {
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