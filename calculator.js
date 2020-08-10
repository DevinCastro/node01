console.log(`Hello ${process.argv[2]}`)


// for (let i = 0; i < 101; i++) {
//   console.log(i)
// }


// console.log(`There name is ${process.argv[2]} ${process.argv[3]} and their favorite movie is ${process.argv[4]}`)


let num1 = parseInt(process.argv[2])
let operator = process.argv[3]
let num2 = parseInt(process.argv[4])
let result


switch (operator) {
  case '+':
    result = num1 + num2
    break;
  case '-':
    result = num1 - num2
    break;
  case '*':
    result = num1 * num2
    break;
  case '/':
    result = num1 / num2
    break;

}

console.log(result)
