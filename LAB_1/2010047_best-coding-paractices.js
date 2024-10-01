// Problem 1
let ProductList = [{Id:1,ProductName:"Laptop",Quantity:20, Price: 20000},{Id:2,ProductName:"Laptop",Quantity:20, Price: 20000},{Id:3,ProductName:"Laptop",Quantity:20, Price: 20000},{Id:4,ProductName:"Desktop",Quantity:10, Price: 80000}];

// Update Product List Function
let UpdateProductList = (Id, ProductName, Quantity, Price) => {
    ProductList.push({Id:Id,ProductName:ProductName,Quantity:Quantity,Price:Price});
}

let DeleteProduct = (ProductList,Id) => {
    ProductList = ProductList.filter(Product => Product.Id != Id);
    return ProductList;

}
// Call Update Product List
UpdateProductList(5,"Mobile",10,8000);



// Display Function
let DisplayProductList = (ProductList) => {
    ProductList.map((Product) => {
        console.log(Product)
    })
}

DisplayProductList(DeleteProduct(ProductList,2));



// Problem 2
// array name in snake_naming_convention
let student_list = [
    {
        fullName: "TAJIM NOOR", // structure property names in camelCase
        rollNumber: 21,
        marks: 89
    },
    {
        fullName: "DIBAKAR",
        rollNumber: 22,
        marks: 70
    },
    {
        fullName: "ADIB AL MEHMOOD",
        rollNumber: 23,
        marks: 90
    },
    {
        fullName: "SAKLAINE NOOR",
        rollNumber: 24,
        marks: 40
    },
    {
        fullName: "HAFIZ SAIMON",
        rollNumber: 25,
        marks: 50
    },
    {
        fullName: "TOUFIQ ISLAM",
        rollNumber: 26,
        marks: 75
    }
];

let choose_cr = (student_list) => {
    let highest_mark = 0;
    let cr_roll = 0;
    student_list.map(student => {
        if(highest_mark<student.marks) {
            highest_mark = student.marks;
            cr_roll = student.rollNumber;
        }
    })
    student_list.map(student => {
        if(student.rollNumber == cr_roll){
            console.log(student);
        }
    })
}

//call cr
choose_cr(student_list);