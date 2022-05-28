//Elements
let billInputElement = document.getElementsByClassName('splitter__bill-input')[0]
let numberOfPeopleElement = document.getElementsByClassName('splitter__people-number-input')[0]
let totalElement = document.getElementsByClassName('splitter__total')[0]
let amountElement = document.getElementsByClassName('splitter__amount')[0]
let billIsZeroElement = document.getElementsByClassName('splitter__bill-zero')[0]
let peopleIsZeroElement = document.getElementsByClassName('splitter__people-zero')[0]
let customTipElement = document.getElementsByClassName('--custom')[0]
let tipButtonElements = document.getElementsByClassName('splitter__tip-btn')
let resetButtonElement = document.getElementsByClassName('splitter__reset-btn')[0]
//Variables
let bill = 0
let tip = 0
let people;
let tipAmount = 0
let total = 0
//Functions
/**
 * Set a value on tip variable and add states to the tip buttons
 * @param {int} value 
 */
function setTip(value) {
    for (let i = 0; i < tipButtonElements.length; i++) {
        tipButtonElements[i].classList.remove('selected')
    }
    customTipElement.value = ''
    document.getElementsByClassName(`--${value}`)[0].classList.add('selected')
    tip = value
    calculate()
}
/**
 * Get the value of the custom tip input and sets on tip variable
 */
function setCustomTip() {
    for (let i = 0; i < tipButtonElements.length; i++) {
        tipButtonElements[i].classList.remove('selected')
    }
    tip = customTipElement.value
    calculate()
}
/**
 * Sets values on bill and people variables and makes sure that the value is not 0
 */
function updateAndVerify() {
    bill = billInputElement.value
    people = numberOfPeopleElement.value
    if (bill == '0') {
        billIsZeroElement.classList.add('show')
        billInputElement.classList.add('border-error')
    } else {
        billIsZeroElement.classList.remove('show')
        billInputElement.classList.remove('border-error')
    }
    if (people == '0') {
        peopleIsZeroElement.classList.add('show')
        numberOfPeopleElement.classList.add('border-error')
    } else {
        peopleIsZeroElement.classList.remove('show')
        numberOfPeopleElement.classList.remove('border-error')
    }
    console.log(bill)
    console.log(`People: ${people}`)
}
/**
 * Reset all values
 */
function reset() {
    for (let i = 0; i < tipButtonElements.length; i++) {
        tipButtonElements[i].classList.remove('selected')
    }
    customTipElement.value = ''
    billInputElement.value = ''
    numberOfPeopleElement.value = ''
    totalElement.innerText = '$0.00'
    amountElement.innerText = '$0.00'
    resetButtonElement.disabled = true
}
/**
 * Calculate the variables to display the result
 */
function calculate() {
    updateAndVerify()
    if (bill > 0 && tip >= 0 && people > 0) {
        tipAmount = ((bill * tip) / 100) / people
        total = (bill / people) + tipAmount
        amountElement.innerText = `$${tipAmount.toFixed(2)}`
        totalElement.innerText = `$${total.toFixed(2)}`
        resetButtonElement.disabled = false
    }

}

