const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const deleteButton = document.querySelector('[data-delete]');
const equalsButton = document.querySelector('[data-equals]');
const clearButton = document.querySelector('[data-clear]');
const previousOperandText = document.querySelector('[data-previous-operand]');
const currentOperandText = document.querySelector('[data-current-operand]');


class Calculator {
    constructor(previousOperandText,currentOperandText) {
        this.previousOperandText = previousOperandText
        this.currentOperandText = currentOperandText
        this.clear()
    }
    
    
    clear() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }
    delete() {
        
        this.currentOperand = this.currentOperand.substring(0, this.currentOperand.length - 1);
    }
    equals() {

    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
        

        
    }

    chooseOperation(operation) {
        this.operation = operation
        if (this.currentOperand === '') return
        if (this.previousOperand !== '') {
            this.compute();
        }
        this.previousOperand = `${this.currentOperand.toString()} ${operation.toString()}`
        this.currentOperand = ''
    }

    compute() {
        let computation 
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if (isNaN(prev) || isNaN(current)) return
        
        switch (this.operation) {
            case '+': 
                computation = prev + current 
                break
            case '*': 
                computation = prev * current 
                break
            case '÷': 
                computation = prev / current 
                break
            case '-': 
                computation = prev - current 
                break
            default: 
            return

            
        }

        this.currentOperand = computation.toString();
        this.operation = undefined
        this.previousOperand = ''
    }

    getDisplay(number) {
        const stringNumber = number.toString();
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        let integerDisplay;
        if (isNaN(integerDigits)) {
            integerDisplay = ''
        }else {
            integerDisplay = integerDigits.toLocaleString('en', {maximumFractionDigits:0})
        }
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`
        }else {
            return integerDisplay
        }
    }

    updateDisplay() {
        
       
        
        
        
        this.currentOperandText.innerText = this.getDisplay(this.currentOperand);
        this.previousOperandText.innerText = this.previousOperand;
    }
}


const calculator = new Calculator(previousOperandText,currentOperandText) 



numberButtons.forEach(button => {
    button.addEventListener('click' , () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay();
    })
})



operationButtons.forEach(button => {
    button.addEventListener('click' , () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay();
    })
})

equalsButton.addEventListener('click', () => {
    calculator.compute();
    calculator.updateDisplay();
})

clearButton.addEventListener('click', () => {
    calculator.clear();
    calculator.updateDisplay();
})
deleteButton.addEventListener('click', () => {
    calculator.delete();
    calculator.updateDisplay();
})