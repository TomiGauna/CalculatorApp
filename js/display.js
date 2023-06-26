class Display{
    constructor(dispEntryValue, dispPriorValue){
        this.dispEntryValue = dispEntryValue;
        this.dispPriorValue = dispPriorValue;
        this.calculato = new Calculator();
        this.typeOperation = undefined;
        this.entryValue = '';
        this.priorValue = '';
        this.signs = {
            addition: '+',
            subtraction: '-',
            multiplication: 'x',
            division: '%'
        }
    }

    delete(){
        this.entryValue = this.entryValue.toString().slice(0, -1);
        this.putValues();
    }

    deleteEverything(){
        this.entryValue = '';
        this.priorValue = '';
        this.typeOperation = undefined;
        this.putValues();
    }

    compute(type){
        this.typeOperation !== 'equalto' && this.calculate();
        this.typeOperation = type;
        this.priorValue = this.entryValue || this.priorValue;
        this.entryValue = '';
        this.putValues();
    }

    addNumber(number){
        if (number === ',' && this.entryValue.includes(',')) return
        this.entryValue = this.entryValue.toString() + number.toString();
        this.putValues();
    }

    putValues(){
        this.dispEntryValue.textContent = this.entryValue;
        this.dispPriorValue.textContent = `${this.priorValue} ${this.signs[this.typeOperation] || ''}`;
    }

    calculate(){
        const priorValue = parseFloat(this.priorValue);
        const entryValue = parseFloat(this.entryValue);

        if (isNaN(entryValue) || isNaN(priorValue)) return
        this.entryValue = this.calculato[this.typeOperation](priorValue, entryValue)
    }
}
 