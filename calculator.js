// Array to store valid results for the summary table 
let validResults = [];

// Start the table for individual computations 
document.write("<table>");
document.write("<tr><th>Number 1</th><th>Operator</th><th>Number 2</th><th>Result</th></tr>");

while (true) {
    // Prompt for input 
    let xInput = prompt("Enter the first number (x):");
    if (xInput === null) break; // Exit loop if "Cancel" is clicked 

    let operator = prompt("Enter an operator (+, -, *, /, %):");
    if (operator === null) break;

    let yInput = prompt("Enter the second number (y):");
    if (yInput === null) break;

    let result;
    let x = parseFloat(xInput);
    let y = parseFloat(yInput);

    //Validate numeric input using isNaN 
    if (isNaN(x) || isNaN(y)) {
        result = "wrong input number";
    } else {
        // Perform computation or handle invalid operator 
        switch (operator) {
            case "+": result = x + y; break;
            case "-": result = x - y; break;
            case "*": result = x * y; break;
            case "/": result = x / y; break;
            case "%": result = x % y; break;
            default: result = "computation error"; 
        }
    }

    // Add result to validResults array if it is a number 
    if (typeof result === "number") {
        validResults.push(result);
    }

    //Output the row for the current operation 
    document.write("<tr><td>" + xInput + "</td><td>" + operator + "</td><td>" + yInput + "</td><td>" + result + "</td></tr>");
}

document.write("</table>");

//Construct Summary Table after exiting the loop
if (validResults.length > 0) {
    let min = Math.min(...validResults);
    let max = Math.max(...validResults);
    let total = validResults.reduce((a, b) => a + b, 0);
    let avg = total / validResults.length;

    document.write("<h3>Summary</h3>");
    document.write("<table>");
    document.write("<tr><th>Minimum</th><th>Maximum</th><th>Average</th><th>Total</th></tr>");
    document.write("<tr><td>" + min + "</td><td>" + max + "</td><td>" + avg.toFixed(2) + "</td><td>" + total + "</td></tr>");
    document.write("</table>");
}