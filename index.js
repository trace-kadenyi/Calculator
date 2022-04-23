const input = document.getElementById('input');
const output = document.getElementById('output');
const digits = document.querySelectorAll('.btn-secondary');
const symbols = document.querySelectorAll('.btn-info');



function theNumbers() {                                     // iterating through the numbers and displaying them
    for(let i = 0; i < digits.length; i++) {                // in the input section
        digits[i].addEventListener('click', () => {
            input.innerHTML += digits[i].innerText
            output.innerText = 0;
        })
    }
}
theNumbers()

function symbs() {                                          // iterating through the symbols and displaying them
    for(let i = 0; i < symbols.length; i++) {               // in the input section
        symbols[i].addEventListener('click', () => {
            input.innerText += symbols[i].innerText
        })
    }
}
symbs()

function compute() {                                            // computing the elements in the input section
    const equals = document.querySelector('.btn-success');
    equals.addEventListener('click', () => {
        try{
            let result = eval(input.innerText)                      // computing the digits and symbols
            let numberedOutput = Number(result)                     // converting the result to a number

            var theOutput = (result - Math.floor(result)) !== 0;        // checking if the result is a whole number or not
            if(theOutput) {
                output.innerHTML = numberedOutput.toFixed(2)            // if a decimal, round of to 2 decimal places
            } else {
                output.innerHTML = numberedOutput                       // else return the whole number in the output
            }
        } catch (err) {                                                 // catch an error if the output is not a number
            output.innerText = 'Error!'
        }
        
        
    })
}
compute()

function deleteEntries() {                                              // delete input data
    const substract = document.querySelector('.btn-danger');
    substract.addEventListener('click', () => {
        let inputData = input.innerText
        input.innerText = inputData.slice(0, -1)
        output.innerText = 0;
    })
}
deleteEntries()

function clearEntries() {                                           //clears the input section
    const cleared = document.querySelector('.clear');
    cleared.addEventListener('click', () => {
        input.innerText = '';
        output.innerText = 0;
    })
}
clearEntries();

function answeredButton() {                                         // similar to the equal sign expect it
    const answered = document.querySelector('.answer');             // doesn't round off the decimal places
    answered.addEventListener('click', () => {
        try{
            output.innerText = eval(input.innerText)
        } catch (err) {
            output.innerText = 'Error!'
        }
        
    })
}
answeredButton();

