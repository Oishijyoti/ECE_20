<p align="center"><em>"Heaven's Light is Our Guide"</em></p><br>

# Rajshahi University of Engineering & Technology<br>
<p align=center>
  <img src="https://saif1024bd.wordpress.com/wp-content/uploads/2011/06/ruet-monogram-1545x1850.png?w=250" alt="RUET Logo" height="150">
</p><br>

<h2>Course Code :  <font size="3">3118</font> </h2> 

<h2>Course Title :  <font size="3">Software Engineering & Information System Design Sessional</font> </h2> 
 <br>       


<p align="center">

| Submitted To   | Submitted By    |
|----------------|----------------|
| Oishi Joyti    | Anika Tabassum Tuba |
| Assistant Professor  | Roll: 2010018   |
| Deartment of ECE,RUET | 3rd year Odd Semester
<br>


# Table of Contents

| No. | Experiment Name |
|-----|----------------------------------------------------|
| 1   | Basic documentation using Markdown language|
| 2   | Best Coding Practices|
| 3   | Study of Different Git Commands| 

<br>  

## 1.1 Experiment No :  <font size="3">1</font> 

## 1.2 Experiment Name :  <font size="3">Basic documentation using Markdown language</font> 

## 1.3 Objectives: 
- To comprehend Markdown's fundamental syntax.
- To learn how to use Markdown to produce organized documentation.
- To use Markdown for documenting of experiments. 

## 1.4 Source Code : 

### Types of header
# Header 1
## Header 2
### Header 3
#### Header 4
##### Header 5
###### Header 6

_Italic writing using underscore_<br>
*Italic writing using asteric*<br>

__Bold writing using dash__<br>
**Bold writing using asteric**<br>

***This is bold and italic writing using star***<br>
___This is bold and italic writing using dash___<br>

### Strike through
~~A line through the text~~<br>

### Links
[https://www.kaggle.com/discussions/getting-started/40799]<br>

### table
|Product Name  | Brand |  price  |
|-----------|---------|----------|
| Hand-Bag  | Gucci     | $1550  |
| Shoe      | Valentino | $1890  |
| Perfume   |  Dior     | $145   |


### image
![Sea](image.png)



## 2.1 Experiment No :  <font size="3">2</font> 

## 2.2 Experiment Name :  <font size="3">Best Coding Practice</font> 

## 2.3 Theory:

In programming, following consistent naming conventions helps in maintaining clean and readable code. Below are some common naming conventions used in C++, along with examples.

## 1. Snake Case
Snake Case separates words with underscores and is commonly used for function names and variable names in C++.

### Syntax:

snake_case

### C++ Example:
```
int var_value = 44;

void print_message() {
    std::cout << "That's a snake case example." << std::endl;
}
```

Here, `var_value` and `print_message` follow the Snake Case convention. All words are lowercase and separated by underscores.

## 2. Pascal Case
Pascal Case capitalizes the first letter of each word, without spaces or underscores. This convention is often used for naming classes and structs.

### Syntax:

PascalCase
```
### C++ Example:

class MyClass {
public:
    void PrintMessage() {
        std::cout << "Hello, World!" << std::endl;
    }
};
```

In this example, `MyClass` follows Pascal Case. Class names should start with a capital letter and each new word within the name is capitalized.

## 3. Camel Case
Camel Case starts with a lowercase letter, and subsequent words are capitalized. It is usually used for naming variables and functions.

### Syntax:

camelCase


### C++ Example:
```
int variableValue = 42;

void printMessage() {
    std::cout << "That's camel case example." << std::endl;
}
```

In this example, `variableValue` and `printMessage` use Camel Case, where the first letter is lowercase, and each new word starts with an uppercase letter.

## 4. Kebab Case
Kebab Case uses hyphens between words, but this is not typically used in C++ because variable and function names cannot contain hyphens. It is more commonly used in URLs or CSS class names.

### Syntax:

kebab-case


Though not common in C++, it might look like this in a URL or external file:
```
<link rel="stylesheet" href="my-project-style.css">
```
In this example, `my-project-stle` use Camel Case, where hyphens between words are used.
