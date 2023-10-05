function calculateAverage() {
    var numbersInput = document.getElementById('numbers');
    var numbers = numbersInput.value.split(',').map(Number);
  
    var total = 0;
    var count = numbers.length;
  
    for (var i = 0; i < count; i++) {
      total += numbers[i];
    }
  
    var average = total / count;
  
    var resultContainer = document.getElementById('result');
    resultContainer.textContent = 'The average is: ' + average.toFixed(2)
  }