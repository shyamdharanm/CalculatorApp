let displayValue = '';

function buttonClicked(button) {
  displayValue += button.textContent;
  document.getElementById('display').value = displayValue;
}

function clearDisplay() {
  displayValue = '';
  document.getElementById('display').value = displayValue;
}

function calculate() {
  const result = eval(displayValue);
  document.getElementById('display').value = result;
  displayValue = result.toString();
}
