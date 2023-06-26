const dispEntryValue = document.getElementById('entryvalue');
const dispPriorValue = document.getElementById('displayedvalue');
const numberBtns = document.querySelectorAll('.number');
const operatorBtns = document.querySelectorAll('.operator');

const display = new Display(dispPriorValue, dispEntryValue);

numberBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        display.addNumber(btn.innerHTML)
    });
});

operatorBtns.forEach(btn => {
    btn.addEventListener('click', () => display.compute(btn.value))
})