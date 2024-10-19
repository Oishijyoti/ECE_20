<p align="center"><em>"Heaven's Light is Our Guide"</em></p>
<h1 align="center">Rajshahi University of Engineering and Technology</h1>


<p align="center">
  <img src="https://saif1024bd.wordpress.com/wp-content/uploads/2011/06/ruet-monogram-1545x1850.png?w=250" alt="RUET Logo" height="250">
</p>


<h2 align="center">ECE-3118<br>Software Engineering & Information System Design Sessional</h2>
<br>
<br>

| Submitted to    | Submitted by |
   | -----  |----- | 
   | Oishi Jyoti | Sadia Sultana Pinky |
   | Assistant Professor | Roll: 2010061 |
   | Department of ECE | Department of ECE |


---

<br>

## Table of Contents
1. [Basic Documentation Using Markdown](#basic-documentation-using-markdown)
2. [Best Coding Practices](#best-coding-practices)

---
<br>



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



# Paragraph
<p>Hello World! </p>


# Strikethrough
~~this is strikethrough~~


# Inline codeblock 
`inline code`
<h2>Pizza</h2>

# Multiple line codeblock 
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pizzaburg</title>
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
    background-color: blue;
}
```
# List

## Orderdlist
1. Meat Machine
2. Italiano
    - Special
    - Regular
3. Sausage Blast
<br>
<br>


## Unorderdlist
- data1
- data2
    - data 2.2
    - data 2.3
- data3

## Tasklist
- [x] Customer Review
- [x] Direction
- [ ] Cling cling


# Link
## link
https://www.wisconsinchamberchoir.org/?gad_source=1&gclid=CjwKCAjw_ZC2BhAQEiwAXSgCls7JYajU1vG6PJTZoT9W6eRXhILRY5BrPvAH_oayyyrXsx6GWY5uqhoC2ygQAvD_BwE



## Markdown link syntax 
  
[title](link)  
[Subcription link](https://www.bing.com/spotlight?FORM=M403J9&msclkid=3c2621d3507c1360bc5f46c152096c9d&q=san+juan+mountains&spotlightid=SanJuanMtsColorado)  
[Subcription link][websitelink]

 <!-- all link is here  -->

   [websitelink]: https://www.bing.com/spotlight?FORM=M403J9&msclkid=3c2621d3507c1360bc5f46c152096c9d&q=san+juan+mountains&spotlightid=SanJuanMtsColorado

<!-- adding image syntax -->

# Image

 ![alt text](imageURL)   

 ![Pizza](https://secretrecipebd.com/wp-content/uploads/2021/07/pizza_tuna-olive.jpg)

 <img src='https://secretrecipebd.com/wp-content/uploads/2021/07/pizza_tuna-olive.jpg' width='250'>


 


 <!-- adding table -->
# Table
   
   | Menu | Small | Large |
   | ----- | ----- | ----- |
   | Italiano | x | 560 |
   | Meat Machine |x  | 900 |
   | Sausage Blast | 560 | 900 |
   | onion | x | 1200 |





# Best Coding Practices
Conventionally, there are four ways to naming variables methods etc. They are:
- Camel Case: JavaScript, Java, C#
    - firstName, lastName
- Snake Case: Python, Ruby, JavaScript
    - first_name, last_name
- Kebab Case: html, css
    - first-name, last-name
- Pascal Case: JavaScript, TypeScript,C#
    - FirstName, LastName

Implementation

**Problem:**  Track the number of click 

```Html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Click Counter</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="click-counter-container">
        <button id="click-button">Click me!</button>
        <p id="click-count">Click count: 0</p>
    </div>

    <script src="script.js"></script>
</body>
</html>


```

```Css
/* style.css */
.click-counter-container {
    text-align: center;
    margin-top: 50px;
}

#click-button {
    padding: 10px 20px;
    font-size: 16px;
}

#click-count {
    font-size: 18px;
    margin-top: 10px;
}


```

```javascript
// script.js
let clickCount = 0;
const clickButton = document.getElementById('click-button');
const clickCountDisplay = document.getElementById('click-count');

clickButton.addEventListener('click', () => {
    clickCount++;
    clickCountDisplay.textContent = `Click count: ${clickCount}`;
});


```

```python
# snake_case
click_count = 0

def increment_click_count():
    global click_count
    click_count += 1
    print(f"Click count: {click_count}")

# Simulating button clicks
increment_click_count()  # Click count: 1
increment_click_count()  # Click count: 2
increment_click_count()  # Click count: 3

```
