
let characterLengthValue = document.getElementById('demo');
let characterLength = document.getElementById('myRange')
let resultButton = document.getElementById('button');
let result = document.getElementById('result')
let upperCaseOption = document.getElementById('uppercase');
let lowerCaseOption = document.getElementById('lowercase');
let numbersOption = document.getElementById('numbers');
let symbolsOption = document.getElementById('symbols');
let copyImage = document.getElementById('copy-image')


const upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const lowerCase =["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const numbers = ['0', '1', '2' ,'3', '4' , '5', '6', '7', '8' , '9']
const symbols = ["!", "@" , "#" , "$" , "%" , "^" , "&" , "*"]

function showVal(newVal){
    characterLengthValue.innerHTML = newVal;
}

function random(e){
    return Math.floor(Math.random() * e.length);
}



function updateResult () {
    let store = ''
    let array = []
    let result = []

    
    if (upperCaseOption.checked) {
        array = [...array,...upperCase ]
    }
    if (lowerCaseOption.checked) {
        array = [...array,...lowerCase ]
    }
    if (symbolsOption.checked) {
        array = [...array,...symbols ]
    }
    if (numbersOption.checked) {
        array = [ ...array,...numbers ]
    }
   

    for (let i = 0 ; i < myRange.value ; i++) {
        
        store = [array[random(array)]];
        result.push(store)
        
    }
    
    return result.join('');
}


function copyText() {
    
    let text = result.innerText 
    let textArea = document.createElement('textarea')
    textArea.width = '1px';
    textArea.height = '1px';
    textArea.background = 'transparent'
    textArea.value = text;
    document.body.append(textArea);
    textArea.select();
    document.execCommand('copy');   
    document.body.removeChild(textArea);
    
  } 


  function onLoad() {
    result.innerHTML = updateResult();
    lowerCaseOption.checked = true;
    upperCaseOption.checked = true;
    numbersOption.checked = true;
    symbolsOption.checked = true;
  }

resultButton.addEventListener('click', () => {
    
    result.innerHTML = updateResult();
})

copyImage.addEventListener('click' , () => {
    copyText();
    document.querySelector('#copy-image p').classList.remove('animation');
    void document.querySelector('#copy-image p').offsetWidth;
    document.querySelector('#copy-image p').classList.add('animation');
    
})