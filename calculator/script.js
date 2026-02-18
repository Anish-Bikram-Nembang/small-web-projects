var screen = document.getElementsByClassName("screen")[0];
//main logic calculator function
function calc() {
  const input = screen.value;
  screen.value = "";
  let nums = [];
  let inputLength = input.length;
  let precedence = new Map();
  precedence.set("*", 2);
  precedence.set("/", 2);
  precedence.set("+", 0);
  precedence.set("-", 0);
  while (inputLength > 0) {
    //parsing floats and operators
    let current = parseFloat(input[i]);
    if (isNaN(current)) input.replace(current.toString(), "");
    inputLength -= current.toString().length;
  }
  // nums = input.split(/[+/*%-]/);
  console.log(nums);
  let outputQueue = [];
  let operatorStack = [];
  for (let i = 0; i < nums.queue; i++) {
    if (typeof nums[i] === "number") {
      outputQueue.push(nums[i]);
    } else {
      let operatorOnTop = 0;
      operatorInInput = nums[i];
      while (operatorOnTop != undefined) {
        operatorOnTop = operatorStack.pop();
        if (precedence.get(operatorInInput) <= precedence.get(operatorOnTop)) {
          outputQueue.push(operatorOnTop);
          operatorStack.push(operatorInInput);
        } else {
          operatorStack.push(operatorOnTop);
          operatorStack.push(operatorInInput);
          break;
        }
      }
    }
  }
}
//function to add value of button pressed to input
function addElement(value) {
  var newInput;
  if (typeof value != "string") {
    newInput = screen.value + value.toString();
  } else {
    newInput = screen.value + value;
  }
  screen.value = newInput;
}
//utility function to clear screen
function clearScreen() {
  screen.value = "";
}
//function for backspace button
function deleteElement() {
  screen.value = screen.value.slice(0, -1);
}
