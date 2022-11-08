// DOM selectors
const resultEl = document.querySelector(`#result`);
const clipboardEl = document.querySelector(`#clipboard`);
const lowercaseEl = document.querySelector(`#lowercase`);
const uppercaseEl = document.querySelector(`#uppercase`);
const numbersEl = document.querySelector(`#numbers`);
const symbolsEl = document.querySelector(`#symbols`);
const lengthEl = document.querySelector(`#length`);
const generateEl = document.querySelector(`#generate`);

// Random Index
// gets random index of a string 
function randomIndex(i = 'ass') {
    return Math.floor(Math.random() * i.length);

}

console.log(randomIndex('Help'));// random number 1 to 4


// gets random lower case lettler
function getRandomLower() {
    const letters = `abcdefghijklmnopqrstuvwxyz`;

    return letters[randomIndex(letters)];
}

console.log(getRandomLower()); //random lettler


// gets random Upper case lettler
function getRandomUpper(params) {
    const letters = getRandomLower();
    return letters.toUpperCase();
}

console.log(getRandomUpper()); //random lettler


//random number
function randomNum() {
    const numbers = `1234567890`;

    return numbers[randomIndex(numbers)];
}
console.log(randomNum()); //random number

// random symbol
function randomSymbol(params) {
  const symbols = `!@#$%^&*(){}[]=<>/,.`;
  
  return symbols[randomIndex(symbols)];
}

console.log(randomSymbol()); // random symbol



const random = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: randomNum,
    symbols: randomSymbol
}

function password(lower, upper, number, symbols, length) {
    let password = ``;

    const typeCount = lower + upper + number + symbols;

    if(typeCount === 0){
        alert(`please select one option`);

        return '';
    }

    let typesArr = [
        ['lower',lower], ['upper',upper],
        ['number',number], ['symbols', symbols]
    ];
    console.log(typesArr);

    // The filter method creates a new array with all the items that "pass the test" implemented by the provided function (AKA All the items that cause the function to return a boolean value of true when the function is run using the item as the argument for the item parameter in this example) 
    // Checking if the value for index of 1 in each item (AKA Array) in the typesArr array is true or false. Also, removing the item from the typesArr array if it is false.
    typesArr = typesArr.filter((item) => {
        console.log(item[1]);
        return item[1];
    }); 

    for(i = 0; i < length; i+= typeCount){
        typesArr.forEach((type) =>{
            const fucName = type[0];
            
            password += random[fucName]();
            console.log(password);
        });

        
    }


    const finalPassword = password.slice(0, length);
    console.log(finalPassword);

    return finalPassword;
}

// Event Listener

generateEl.addEventListener('click', ()=>{
    const hasLower = lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasNumber = numbersEl.checked;
    const hasSymbol = symbolsEl.checked;

    const length = parseInt(lengthEl.value);

    resultEl.innerText = password(hasLower, hasUpper, hasNumber, hasSymbol, length);
});

clipboardEl.addEventListener('click', () =>{
    const password = resultEl.innerText;

    if(password === ''){
        alert(`Please make a password`);
        return;
    }

    navigator.clipboard.writeText(password);
});