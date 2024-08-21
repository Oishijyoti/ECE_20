<p align="center"><em>"Heaven's Light is Our Guide"</em></p>
<h1 align="center">Rajshahi University of Engineering and Technology</h1>


<p align="center">
  <img src="https://saif1024bd.wordpress.com/wp-content/uploads/2011/06/ruet-monogram-1545x1850.png?w=250" alt="RUET Logo" height="250">
</p>


<h2 align="center">ECE-3118<br>Software Engineering & Information System Design Sessional</h2>

<p align="center">
<b>Submitted by</b><br>
Maysha Yesmin<br>
Roll: 2010005<br>
Department of ECE
</p>

---

<br>

## Table of Contents
1. [Basic Documentation Using Markdown](#basic-documentation-using-markdown)
2. [Best Coding Practices](#best-coding-practices)

---
<br>

# Normal text
<!-- normal text & new line-->
Hello there!  
normal text and new line

<!-- hhorizontal rule -->
# Horizontal rule
---
***
---
<!-- heading -->
# Headings
# heading 1
## heading 2 
### heading 3 
#### heading 4 
##### heading 5 
###### heading 6 

<!-- italic -->
_italic_  or *italic*


<!-- bold -->
__Bold__  or **Bold**

***Bold and Italic*** or ___Bold and Italic___ 


<!-- paragraph -->
# Paragraph
<p>this is the place what you are looking for muse heads. shake a leg!! </p>

<!-- strikethrough -->
# Strikethrough
~~this is strikethrough~~



<!-- inline codeblock -->
# Inline codeblock 
`inline code`
<h2>Music Spark</h2>


<!-- multiple line codeblock -->
# Multiple line codeblock 
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Software development lab</title>
</head>
<body>
    
</body>
</html>
```
```javascript
document.getElementById("demo").innerHTML = 5 + 6;
console.log("hello")
```
```css
head{
    background-color: green;
}
```
# List
<!-- Orderdlist -->
## Orderdlist
1. VIP
2. Reserved seating
    - Disabled
    - Special
3. Member Tickets
<br>
<br>


<!-- unorderdlist -->
## Unorderdlist
- data1
- data2
    - data 2.2
    - data 2.3
- data3

<!-- tasklist -->
## Tasklist
- [x] Manage Auditorium
- [x] Direction
- [] Artists


<!-- automatic link -->
# Link
## automatic link
https://www.wisconsinchamberchoir.org/?gad_source=1&gclid=CjwKCAjw_ZC2BhAQEiwAXSgCls7JYajU1vG6PJTZoT9W6eRXhILRY5BrPvAH_oayyyrXsx6GWY5uqhoC2ygQAvD_BwE

<!-- disabled link -->
## disabled link
`https://www.wisconsinchamberchoir.org/?gad_source=1&gclid=CjwKCAjw_ZC2BhAQEiwAXSgCls7JYajU1vG6PJTZoT9W6eRXhILRY5BrPvAH_oayyyrXsx6GWY5uqhoC2ygQAvD_BwE`


## Markdown link syntax 
  
[title](link)  
[registration link](https://www.wisconsinchamberchoir.org/?gad_source=1&gclid=CjwKCAjw_ZC2BhAQEiwAXSgCls7JYajU1vG6PJTZoT9W6eRXhILRY5BrPvAH_oayyyrXsx6GWY5uqhoC2ygQAvD_BwE)  
[registration link][websitelink]

 <!-- all link is here  -->

   [websitelink]: https://www.wisconsinchamberchoir.org/?gad_source=1&gclid=CjwKCAjw_ZC2BhAQEiwAXSgCls7JYajU1vG6PJTZoT9W6eRXhILRY5BrPvAH_oayyyrXsx6GWY5uqhoC2ygQAvD_BwE

<!-- adding image syntax -->

# Image

 ![alt text](imageURL)   

 ![Tool](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScJ4oXsfzNzOGobGcF6bJfHGN9QzVhcIibeExrLWOuKQ&s)

 <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScJ4oXsfzNzOGobGcF6bJfHGN9QzVhcIibeExrLWOuKQ&s' width='50'>

 Vote For tool

 


 <!-- adding table -->
# Table
   
   | Band Name | Schedule |
   | ----- | ----- |
   | Iron Maiden | 7:30 PM |
   | Porcupine Tree | 9:00 PM |
   | Radiohead | ooh all night |
   | Tools | By dawn |





# Best Coding Practices
As programmers, we name variables, functions, classes, methods, interfaces and so on. Conventionally four of the naming convention have proved to be the most popular ones. They are:
- Camel Case: JavaScript, Java, C#
    - firstName, lastName
- Snake Case: Python, Ruby, JavaScript
    - first_name, last_name
- Kebab Case: html, css
    - first-name, last-name
- Pascal Case: JavaScript, TypeScript,C#
    - FirstName, LastName

Below is the implementation of these cases.

**Problem:**  Track the number of click 

```Html
<!-- HTML (kebab-case for attributes and classes) -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Case Convention Example</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="header-container">
    <h1 class="page-title">Welcome to Case Convention Example</h1>
    <button id="clickMeButton">Click Me</button>
  </div>

  <script src="script.js"></script>
</body>
</html>

```

```Css
/* CSS (kebab-case for class names and properties) */
.header-container {
  text-align: center;
  margin: 20px;
}

.page-title {
  font-size: 2rem;
  color: #333;
}

#clickMeButton {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}

#clickMeButton:hover {
  background-color: #0056b3;
}

```

```javascript
// JavaScript (camelCase for variables and functions, PascalCase for class names, SCREAMING_SNAKE_CASE for constants)

const MAX_CLICKS = 5; // SCREAMING_SNAKE_CASE

class ClickCounter { // PascalCase
  constructor() {
    this.clickCount = 0; // camelCase
  }

  incrementClickCount() { // camelCase
    if (this.clickCount < MAX_CLICKS) {
      this.clickCount++;
      alert(`Clicked ${this.clickCount} times!`);
    } else {
      alert('Max clicks reached!');
    }
  }
}

const clickCounter = new ClickCounter(); // camelCase

document.getElementById('clickMeButton').addEventListener('click', function() {
  clickCounter.incrementClickCount(); // camelCase
});

```