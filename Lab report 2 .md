# Experiment no: 2
# Experiment Name: Best Coding Practices
# Objective:
* Define what naming conventions are and their importance in coding.
* Discuss common conventions like camelCase, PascalCase, snake_case, and kebab-case.
# Source code:
Javascript
// Function to calculate the factorial of a number
function factorial(n) {
    /**
     * Calculates the factorial of a number.
     * @param {number} n - The number to calculate the factorial for.
     * @returns {number} - The factorial of the number.
     */
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers.");
    } else if (n === 0 || n === 1) {
        return 1;
    } else {
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }
}

// Main function to prompt user input and calculate factorial
function main() {
    try {
        const number = parseInt(prompt("Enter a number to find its factorial:"));
        if (isNaN(number)) {
            console.log("Please enter a valid number.");
        } else {
            const fact = factorial(number);
            console.log(The factorial of ${number} is: ${fact});
        }
    } catch (error) {
        console.log(Error: ${error.message});
    }
}

// Execute the main function
main();

# Description:
### Factorial Function:
The factorial function calculates the factorial of a given number n. It handles three cases:

- If n is negative, it throws an error since factorials are not defined for negative numbers.
- If n is 0 or 1, it returns 1 (by definition of factorial).
- For any other positive number, it calculates the factorial using a loop.

### Error Handling:
The function throws an error for negative input values and checks for valid user input.

### Main Function:
The main function prompts the user for input and calls the factorial function to display the result.

### Input Validation:
The code checks if the user enters a valid number before calculating the factorial.



# Naming Conventions:
there are mainly 4 types of naming conventions in industry:
- Camel Case.
- Snake Case.
- Kebab Case.
- Pascal Case.

## Camel Case:
In camel case, you start a name with a small letter. If the name has multiple words, the later words will start with a capital letter:
ex: `firstName, lastName`

## Snake Case:
Like in camel case, you start the name with a small letter in snake case. If the name has multiple words, the later words will start with small letters and you use a underscore (_) to separate the words.
ex: `first_name, last_name`

## Kebab Case:
Kebab case is similar to snake case, but you use a hyphen (-) instead of an underscore (_) to separate the words.
ex: `first-name, last-name`

## Pascal Case:
pascal case start with a capital letter. In case of the names with multiple words, all words will start with capital letters.
ex: `FirstName, LastName`


# Discussion:
Programming naming conventions are rules that assist programmers in selecting distinct and standardized names for variables, functions, classes, and other code elements. By guaranteeing that names are self-explanatory and descriptive, these conventions enhance readability and maintainability.Developers can minimize errors, simplify their code, and promote easier collaboration and maintenance by adhering to these conventions..
# Conclusion:
Adopting proper naming conventions is an essential best practice in coding that improves code readability, maintainability, and collaboration. The use of specific conventions such as camelCase, PascalCase, snake_case, and kebab-case allows for consistent naming patterns across different programming languages and environments. By following these conventions, developers create code that is easier to understand, reduces the likelihood of errors, and facilitates seamless teamwork on larger projects. In essence, naming conventions contribute to writing clean, professional, and scalable code that adheres to industry standards.