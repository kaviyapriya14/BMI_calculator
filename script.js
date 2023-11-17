function updateWeightDisplay() {
  const weightDisplay = document.getElementById('weight-display');
  const weightInput = document.getElementById('weight');
  weightDisplay.textContent = "Weight:" + weightInput.value + " kg";

  calculateBMI(); 
}

function updateHeightDisplay() {
  const heightDisplay = document.getElementById('height-display');
  const heightInput = document.getElementById('height');
  heightDisplay.textContent = "Height:" + heightInput.value + " cm";

  calculateBMI(); 
}

function calculateBMI() {
  const weight = document.getElementById('weight').value;
  const height = document.getElementById('height').value;

  if (!weight || !height) {
    return; 
  }

  const bmi = (weight / ((height / 100) ** 2)).toFixed(1);

  const resultElement = document.getElementById('result');
  resultElement.innerHTML ='<div class="Circle">'+bmi+' </div>';
}
