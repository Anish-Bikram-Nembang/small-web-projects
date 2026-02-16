var screen = document.getElementsByClassName("screen")[0];

function calc() {
  const input = screen.value;
  screen.value = "";
  const nums = [];
  for (var i = 0; i < input.length; i++) {
    if (!isNaN(parseInt(input[i]))) {
      if (i == 0 || isNaN(parseInt(input[i - 1]))) {
        nums.push(parseInt(input[i]));
      } else {
        nums.push(nums.pop() * 10 + parseInt(input[i]));
      }
    } else {
      nums.push(input[i]);
    }
  }
  //WIP: calculation logic
  // var result = 0;
  // for (var i = 0; i < nums.length; i++) {
  //   if (typeof nums[i] === "number") {
  //     num = nums[i];
  //   } else {
  //
  //   }
  // }
  console.log(nums);
}
