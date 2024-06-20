const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const askQuestion = (question: string): Promise<string> => {
    return new Promise((resolve) => rl.question(question, resolve));
};

const calculate = (num1: number, num2: number, operator: string): number | null => {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                console.log("Error: Division by zero is not allowed.");
                return null;
            }
        default:
            console.log("Error: Invalid operator.");
            return null;
    }
};

const main = async () => {
    const num1Str = await askQuestion('Enter the first number: ');
    const operator = await askQuestion('Enter the operator (+, -, *, /): ');
    const num2Str = await askQuestion('Enter the second number: ');

    const num1 = parseFloat(num1Str);
    const num2 = parseFloat(num2Str);

    if (isNaN(num1) || isNaN(num2)) {
        console.log('Error: Please enter valid numbers.');
        rl.close();
        return;
    }

    const result = calculate(num1, num2, operator);

    if (result !== null) {
        console.log(`The result is: ${result}`);
    }

    rl.close();
};

main();
