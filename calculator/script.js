var screen = document.getElementsByClassName("screen")[0];

function calc() {
  const input = screen.value;
  screen.value = "";
  const nums = [];
  for (let i = 0; i < input.length; i++) {
    let currentDigit = parseInt(input[i]);
    if (!isNaN(currentDigit)) {
      if (i == 0 || isNaN(parseInt(input[i - 1]))) {
        nums.push(currentDigit);
      } else {
        nums.push(nums.pop() * 10 + currentDigit);
      }
    } else {
      nums.push(input[i]);
    }
  }
  console.log(nums);
  var result = nums.pop();
  var current;
  while ((current = nums.pop()) != undefined) {
    switch (current) {
      case "+":
        result += nums.pop();
        break;
      case "*":
        result *= nums.pop();
        break;
      case "/":
        result /= nums.pop();
        break;
      case "-":
        result -= nums.pop();
        break;
      default:
        result = "ERROR";
        break;
    }
  }
  screen.value = result.toString();
}
