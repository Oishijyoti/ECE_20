<p align="center">
  <img src="https://saif1024bd.wordpress.com/wp-content/uploads/2011/06/ruet-monogram-1545x1850.png?w=250" alt="RUET Logo" height="200">
</p>

<p align="center"><em>"Heaven's Light is Our Guide"</em></p>

<h1 align="center">Department of Electrical and Computer Engineering (ECE) - RUET</h1>
<h2 align="center">20 Series</h2>

<p align="center">This repository contains all the assignments, lab reports, and other necessary academic files.</p>

<p align="center">
<b>Submitted by</b><br>
<i>Nabila Ferdous</i><br>
<i>Roll: 2010035</i>
</p>

---

## Table of Contents
1. [Basic Documentation Using Markdown](#basic-documentation-using-markdown)
2. [Best Coding Practices](#best-coding-practices)

---

## Basic Documentation Using Markdown

Markdown is a lightweight markup language with plain-text formatting syntax. Here are some basic elements:

### All Types of Headings

# Header 1
## Header 2
### Header 3
#### Header 4
##### Header 5
###### Header 6

### Emphasis
*Italic* or _Italic_  
**Bold** or __Bold__  
***Bold and Italic*** or ___Bold and Italic___  

### Strike Through
~~This is strikethrough text.~~

### Links
[Free-Code-Camp-Git-course](https://youtu.be/zTjRZNkhiEU?si=x71lqVUfGXwIfewS)

### Images
![My logo](https://i.ibb.co/CP97V6n/Screenshot-2024-06-15-031730-removebg-preview.png)

### Match Summary: Bangladesh vs India - T20 World Cup

| Player Name         | Team       | Runs | Balls | Fours | Sixes | Wickets | Overs | Economy |
|---------------------|------------|------|-------|-------|-------|---------|-------|---------|
| Tamim Iqbal         | Bangladesh | 35   | 29    | 4     | 1     | -       | -     | -       |
| Shakib Al Hasan     | Bangladesh | 42   | 35    | 3     | 2     | 2       | 4     | 7.50    |
| Mushfiqur Rahim     | Bangladesh | 50*  | 32    | 5     | 2     | -       | -     | -       |
| Mustafizur Rahman   | Bangladesh | -    | -     | -     | -     | 3       | 4     | 6.00    |
| Rohit Sharma        | India      | 60   | 40    | 6     | 3     | -       | -     | -       |
| Virat Kohli         | India      | 45   | 30    | 4     | 1     | -       | -     | -       |
| Jasprit Bumrah      | India      | -    | -     | -     | -     | 2       | 4     | 5.50    |
| Ravindra Jadeja     | India      | -    | -     | -     | -     | 1       | 4     | 7.00    |

Note:
- `*` denotes not out.
- `-` denotes not applicable or did not bat/bowl.

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
## Best Coding Practices

```javascript
//Pascal Case=>FirstName C#,Java,Typescript
// Snake: first_name Python,Ruby,Javascript
// Camel: firstName Javascript,Java.C#
// Kebab:First-Name=>HTML,CSS(Classname ,filename,url)


//Problem1: Write a code to update product list .One can set the values and also display it.
const ProductList=['Apple','Mango','Orange','PineApple'];
const UpdateProductList=(ProductName)=>{
    let UpdatedProductList=[...ProductList,ProductName];
    // console.log(...ProductList);
    
    DisplayProduct(UpdatedProductList); 
}

//  UpdatedProductList=function(ProductName){
//     let UpdatedProductList=[...ProductList,ProductName] 
//     DisplayProduct(UpdatedProductList); 
// }
const DisplayProduct=(list)=>{
   for (let index = 0; index < list.length; index++) {
    const element = list[index];
    console.log(element);
   
    
   }
   
}
UpdateProductList('JackFruit')


//Write a code to select CR ,where each student is represented by a structure containing their name
// roll number marks.CR is choosen based on highest marks
//Write a code to select CR ,where each student is represented by a structure containing their name
// roll number marks.CR is choosen based on highest marks
// Define the list of students
const students = [
    {
        name: "Aniruddo Shaha",
        roll: 57,
        marks: 17
    },
    {
        name: "Ridwan Rahman",
        roll: 20,
        marks: 15
    },
   
];

// Function to select the CR
const select_CR = (students) => {
    let CR = students[0];
    for(let i = 1; i < students.length; i++) {
        if(students[i].marks > CR.marks) {
            CR = students[i];
        }
    }
    return CR;
}

// Select the CR and log the result
const CR = select_CR(students);
console.log(`The CR is ${CR.name} with roll number ${CR.roll} and marks ${CR.marks}`);

const addNumbers=(num1,num2)=>{
    const sum=num1+num2;
    return sum;
}
const subNumbers=(num1,num2)=>{
    const subtractedResult=num1-num2;
    return subtractedResult;
}
const multiplyNumbers=(num1,num2)=>{
 const multipliedResult=num1 * num2;
 return multipliedResult
}
const dividedNumbers=(num1,num2)=>{
   const dividedResult=num1/num2;
   return dividedResult;
}
const summation=addNumbers(3,4);
const subtraction=subNumbers(10,4);
const multiplication=multiplyNumbers(2,3);
const division=dividedNumbers(9,3)
console.log("The summation is",summation,"The subtraction is",subtraction,"The multiplication is",multiplication,"The division is",division);
```

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>GitHub Profile</title>
    
</head>
<body>
    <div class="username"><span class="name">My User Name:</span> NabilaFerdousPrapty</div>
    <div class="repository">Repository:ECE_20-Software-Engineering-and-Information-Systems-Design</div>
</body>
</html>



This `README.md` format includes the HTML and CSS code within markdown code blocks, which will be properly displayed when viewed on platforms like GitHub.
