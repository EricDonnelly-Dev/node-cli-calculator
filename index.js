const rs = require('readline-sync');



const validOperation = ["+","-","*","/"];
console.log("Hello")

let operation= rs.question('What operation would you like to preform? ',
    {
        limit:validOperation,
        limitMessage:"That is not a valid operation. Please enter one of the following : $<limit>"
    });

if (!validOperation.includes(operation)){
    console.log();

} else {
    let firstNum = rs.questionInt("Please enter the first number? ",{limitMessage:"This is not a number"});
    let secondNum = rs.questionInt("Please enter the second number? ",{limitMessage:"This is not a number"});
    let result = findResult(operation);

    function findResult (operation) {
        switch (operation) {
            case "+":
                return firstNum + secondNum;
            case "-":
                return firstNum - secondNum;
            case "/":
                return firstNum / secondNum;
            case "*":
                return firstNum * secondNum;
            default:
                return "Operation not completed";
        }
    }

    console.log(`The answer for your equation is ${firstNum} ${operation} ${secondNum} = ${result}`)

}


