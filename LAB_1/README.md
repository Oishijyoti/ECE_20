<p align="center">
  <img src="https://saif1024bd.wordpress.com/wp-content/uploads/2011/06/ruet-monogram-1545x1850.png?w=250" alt="RUET Logo" height="200">
</p><br>


<p align="center"><em>"Heaven's Light is Our Guide"</em></p>
Dalia Segufta <br>
2010044 <br><br>
Markdown is a lightweight markup language used for formatting text, and it's simple to use. Here's a basic guide to writing documentation using Markdown.

### Headers
You can create headers using `#` symbols. The more `#`, the smaller the header.


# H1 Header
## H2 Header
### H3 Header
#### H4 Header


### Emphasis
You can italicize text or make it bold.


*Italic* or _Italic_
**Bold** or __Bold__
***Bold Italic*** or ___Bold Italic___


### Lists
- **Unordered lists** use dashes or asterisks:

  - Item 1
  - Item 2
  - Item 3

  
- **Ordered lists** use numbers:
 
  1. First item
  2. Second item
  3. Third item
 

### Links
You can add links like this:

[Link Text](https://www.youtube.com/watch?v=XMsp0TBTgxQ)


### Images
You can embed images using:

![Alt text](https://media.istockphoto.com/id/157639696/photo/purple-space-stars.jpg?s=612x612&w=0&k=20&c=fkLtGZxUS9UPlLJUTeGjvvURT0u-vtxvj5sAYbDNrH4=)


### Code
- **Inline code** is wrapped in backticks:
  ```markdown
  `code here`
  ```

- **Code blocks** are wrapped with triple backticks:
  ```markdown
  ```python
  print("Hello, World! :)")
 
  ```



### Tables
Tables are created with pipes and hyphens:

```markdown
| Header 1 | Header 2 |
|----------|----------|
| Data 1   | Data 2   |
| Data 3   | Data 4   |
```

### Horizontal Line
A horizontal line is created with three or more hyphens or asterisks:
```markdown
---
```

### Checklist
You can create checklists using:
```markdown
- [ ] Task 1
- [x] Task 2 (completed)
```

***



# Coding Conventions in C++: Pascal Case, Kebab Case, Snake Case, and Camel Case

In programming, following consistent naming conventions helps in maintaining clean and readable code. Below are some common naming conventions used in C++, along with examples.

## 1. Pascal Case
Pascal Case capitalizes the first letter of each word, without spaces or underscores. This convention is often used for naming classes and structs.

### Syntax:

PascalCase
```

### C++ Example:
```cpp
class MyClass {
public:
    void PrintMessage() {
        std::cout << "Hello, World!" << std::endl;
    }
};
```

In this example, `MyClass` follows Pascal Case. Class names should start with a capital letter and each new word within the name is capitalized.

## 2. Kebab Case
Kebab Case uses hyphens between words, but this is not typically used in C++ because variable and function names cannot contain hyphens. It is more commonly used in URLs or CSS class names.

### Syntax:

kebab-case


Though not common in C++, it might look like this in a URL or external file:
```html
<link rel="stylesheet" href="my-project-style.css">
```

## 3. Snake Case
Snake Case separates words with underscores and is commonly used for function names and variable names in C++.

### Syntax:

snake_case


### C++ Example:
```cpp
int my_variable = 44;

void print_message() {
    std::cout << "This is snake case example." << std::endl;
}
```

Here, `my_variable` and `print_message` follow the Snake Case convention. All words are lowercase and separated by underscores.

## 4. Camel Case
Camel Case starts with a lowercase letter, and subsequent words are capitalized. It is usually used for naming variables and functions.

### Syntax:

camelCase


### C++ Example:
```cpp
int myVariable = 42;

void printMessage() {
    std::cout << "This is camel case example." << std::endl;
}
```

In this example, `myVariable` and `printMessage` use Camel Case, where the first letter is lowercase, and each new word starts with an uppercase letter.



### Conclusion:

- **Pascal Case**: Commonly used for class names.
- **Snake Case**: Used for variable and function names, especially in C++.
- **Camel Case**: A popular choice for variable and function names.
- **Kebab Case**: Not used in C++ but explained for other uses like URLs or external file names.

