<p align="center"><em>"Heaven's Light is Our Guide"</em></p><br>

# Rajshahi University of Engineering & Technology<br>

<p align="center">
  <img src="https://saif1024bd.wordpress.com/wp-content/uploads/2011/06/ruet-monogram-1545x1850.png?w=250" alt="RUET Logo" height="200">
</p><br>

# Department of Electrical and Computer Engineering

<h2>Course Code :  <font size="3">3118</font> </h2> 

<h2>Course Title :  <font size="3">Software Engineering & Information System Design Sessional</font> </h2> 
 <br>  

 

 <p align="center">

| Submitted to   | Submitted by      |
|----------------|-------------------|
| Oishi Joyti    | Shafayata Sultana |
| Assistant Professor  | Roll: 2010059  |
| Deartment of ECE,RUET 
<br>


# Table of Contents

| No. | Experiment Name |
|-----|--------------------------------------------|
| 1   | Basic documentation using Markdown language|
| 2   | Best Coding Practices|
| 3   | Study of Different Git Commands| 

<br>

##  Experiment No: 1


##  Experiment Name: 
Basic documentation using Markdown language


## Objectives:
- To understand the basics of Markdown.
- To learn how to use Markdown for creating structured documents.
- To use Markdown for documenting experiments.

## Source Code :
### Different types of header:
# Header 1
## Header 2
### Header 3
#### Header 4
##### Header 5
###### Header 6

#### Italic Text:
*Italic*

#### Bold Text:
**Bold**

#### Strikethrough:
~~Strikethrough~~

#### Unordered List:
- Bulleted item 1
- Bulleted item 2
- Bulleted item 3

#### Ordered List:
1. First item
 2. Second item
 3. Third item

 #### Horizontal Line:
 ---

***

___


#### Background of text:
```Sifaty```

`One backtick`

#### Link:
[YouTube](www.youtube.com)

#### Image:

**images**:![nature image](https://www.istockphoto.com/stock-photos/nature-and-landscapes)

#### Table
|Name | Age | gender |
|-----|-----|--------|
|Alica|25   |Female  |
|Bob  |30   |Male    |


#### Blockquote:
> This is a quote

#### HTML Code block:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```
##### OR
~~~html

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
~~~
### Discussion:

In this experiment, we explored the basic syntax and structure of the Markdown language, which is widely used for creating simple and organized documentation. Markdown is easy to read and write, offering a clear and concise way to format text, making it ideal for experiment reports and technical documentation.

The **headers** in Markdown range from `# Header 1` to `###### Header 6`, providing a way to organize content hierarchically, much like traditional headings in documents. Using headers allows for a clear separation of sections, improving readability.

For **text styling**, Markdown provides simple symbols. Italic text can be written by surrounding words with single asterisks `*Italic*`, while bold text uses double asterisks `**Bold**`. Additionally, strikethrough text is achieved using double tildes `~~Strikethrough~~`, which can be useful for indicating changes or corrections.

Lists in Markdown are straightforward. **Unordered lists** are created with dashes `-`, while **ordered lists** use numbers. Lists help in organizing points or steps, essential for clarity in documentation.

We also looked at how to insert a **horizontal line**, which is helpful to divide sections visually. This is done using three dashes `---`, asterisks `***`, or underscores `___`.

In Markdown, we can also insert **inline code** using single backticks `` `Code` ``, or for larger blocks of code, use triple backticks ``` ``` for code blocks. This is essential for documenting code snippets clearly.

Markdown supports creating **links** with `[Link text](URL)`. For example, linking to [YouTube](www.youtube.com) can be done in a single line of code. We also explored how to insert **images** using a similar syntax: `![alt text](image link)`. 

Tables are easily structured in Markdown with the use of pipes `|`. This is particularly useful for presenting data in rows and columns, like a table of names, ages, and genders.

Additionally, **blockquotes** are made by adding a greater-than symbol `>` before a line of text, often used for quoting other sources or highlighting key points.

Lastly, Markdown also allows embedding **HTML code** directly within the document. This is useful for more complex formatting or functionality that Markdown alone cannot provide. Both inline and block HTML can be utilized in the same document, making Markdown versatile.

This experiment highlighted how simple syntax in Markdown can be powerful for creating clear, structured, and readable documentation, especially for technical tasks like experiment reporting.


##  Experiment No: 2
##  Experiment Name:
#### Best Coding Practices.

### Objectives:
- To learn and use best practices for writing clean and efficient code.
- To understand key principles for improving code quality, like readability, reusability, and performance.
- To practice adding error handling, clear documentation, and modular design in coding.

#### Introduction:
When naming variables, functions, classes, methods, and interfaces, four naming conventions are most commonly used:

- **Camel Case**: Common in JavaScript, Java, and C#
   - Example: `firstName`, `lastName`

- **Snake Case**: Popular in Python, Ruby, and JavaScript
   - Example: `first_name`, `last_name`

- **Kebab Case**: Typically used in HTML and CSS
   - Example: `first-name`, `last-name`

- **Pascal Case**: Used in JavaScript, TypeScript, and C#
   - Example: `FirstName`, `LastName`

#### Problem: Task Management Application
####  HTML (kebab-case for attributes and classes)
``` 
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Task Manager</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="task-manager">
    <h1 class="header">Task Management Application</h1>
    <input type="text" id="taskInput" placeholder="Add a new task" />
    <button id="addTaskButton">Add Task</button>
    <ul id="taskList"></ul>
  </div>

  <script src="script.js"></script>
</body>
</html>
```

#### CSS (kebab-case for class names and properties)
``` 
/* CSS (kebab-case for class names and properties) */
.task-manager {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.header {
  font-size: 1.8rem;
  color: #333;
  text-align: center;
}

#taskInput {
  width: 80%;
  padding: 10px;
  margin-right: 10px;
}

#addTaskButton {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}

#addTaskButton:hover {
  background-color: #0056b3;
}

#taskList {
  margin-top: 20px;
  list-style-type: none;
  padding: 0;
}

.task-item {
  padding: 10px;
  border-bottom: 1px solid #ddd;
}
```


#### JavaScript (camelCase for variables and functions, PascalCase for class names, SCREAMING_SNAKE_CASE for constants)

```
// JavaScript (camelCase for variables and functions, PascalCase for class names, SCREAMING_SNAKE_CASE for constants)

const MAX_TASKS = 20; // SCREAMING_SNAKE_CASE

class TaskManager { // PascalCase
  constructor() {
    this.tasks = []; // camelCase
  }

  addTask(task) { // camelCase
    if (this.tasks.length < MAX_TASKS) {
      this.tasks.push(task);
      this.displayTasks();
    } else {
      alert('Maximum task limit reached!');
    }
  }

  displayTasks() { // camelCase
    const taskListElement = document.getElementById('taskList');
    taskListElement.innerHTML = ''; // Clear existing tasks

    this.tasks.forEach((task, index) => {
      const listItem = document.createElement('li');
      listItem.className = 'task-item'; // camelCase
      listItem.textContent = task;
      taskListElement.appendChild(listItem);
    });
  }
}

const taskManager = new TaskManager(); // camelCase

document.getElementById('addTaskButton').addEventListener('click', function() {
  const taskInput = document.getElementById('taskInput');
  const task = taskInput.value.trim();

  if (task) {
    taskManager.addTask(task); // camelCase
    taskInput.value = ''; // Clear input field
  } else {
    alert('Please enter a task!');
  }
});

```
### Explanation of Naming Conventions Used:
HTML: Used kebab-case for attributes and class names (e.g., task-manager, addTaskButton).
CSS: Used kebab-case for class names and properties (e.g., .header, #taskList).
JavaScript:
Used camelCase for variable and function names (e.g., taskManager, addTask).
Used PascalCase for the class name (e.g., TaskManager).
Used SCREAMING_SNAKE_CASE for constants (e.g., MAX_TASKS).

### Discussion:

This task management application demonstrates a practical implementation of various naming conventions in HTML, CSS, and JavaScript. Each part of the code follows specific conventions to enhance readability and maintainability.

**HTML**: In the HTML structure, kebab-case is used for class names and attributes, such as `task-manager` and `addTaskButton`. This naming convention is widely adopted for HTML elements as it improves clarity and consistency across the document.

**CSS**: The CSS also employs kebab-case for class selectors and properties, maintaining the same convention used in the HTML. For instance, the class `.header` and the ID `#taskList` are defined using this style, which makes it easy to link the CSS to the respective HTML elements.

**JavaScript**: The JavaScript portion introduces multiple naming conventions. Constants are defined using **SCREAMING_SNAKE_CASE**, like `MAX_TASKS`, to indicate that their values should remain unchanged throughout the application. Class names, such as `TaskManager`, utilize **PascalCase**, while variables and function names are in **camelCase** (e.g., `taskManager`, `addTask`). This differentiation helps to quickly identify the purpose of each identifier within the code.

Overall, these naming conventions contribute to a well-structured codebase, making it easier for developers to read, understand, and collaborate on the application. By adhering to these conventions, the task management application not only functions effectively but also serves as an example of best practices in coding standards.


##  Experiment No: 3

##  Experiment Name:
Study of Different Git Commands

### Objectives:
- To grasp the purpose and application of various Git commands.
- To learn how to utilize Git for effective version control and collaboration.
- To discover different Git commands for efficiently managing repositories.

## 1. Checking Git Version
To verify the installed version of Git, use the following command:

```bash
git --version
```

## 2. Configuration
* ### Setting User Name and Email
To configure your user name and email address for Git commits, use:

```bash
git config --global user.name "sifaty"
git config --global user.email "sifaty@gmail.com"
```

* ### Checking Configuration
To display the current Git configuration settings, run:

```bash
git config --list
```

* ### Displaying Specific Configuration
For a detailed view of the Git configuration settings, execute:

```bash
git config
```

## 3. Essential Git Commands
* ### Initialize a Git Repository
To create a new Git repository in the current directory or to reinitialize an existing one, use:

```bash
git init
```

* ### Adding Files
To stage a file for the next commit, run:

```bash
git add <file_to_stage>
```

* ### Committing Changes
To record changes made to the files in the repository with a brief message, use:

```bash
git commit -m "<commit_message>"
```

* ### Cloning a Repository
To create a local copy of an existing remote repository, use:

```bash
git clone <repository_url>
```

* ### Checking Status
To see the status of the working directory and the staging area, execute:

```bash
git status
```

* ### Pushing Changes
To upload local commits to a remote repository, use:

```bash
git push <remote_repo> <branch_name>
```

* ### Pulling Changes
To fetch and merge changes from a remote repository into your local repository, run:

```bash
git pull <remote_repo> <branch_name>
```

* ### Viewing Differences
To see the changes between the working directory and the staging area or the last commit, execute:

```bash
git diff
```

* ### Viewing Commit History
To display a list of commits in the repository, including details like commit hash, author, date, and message, use:

```bash
git log
```

* ### Removing Files
To delete a file from both the working directory and the staging area, run:

```bash
git rm <file_to_remove>
```

* ### Listing Files
To show the files in the current directory, use:

```bash
ls
```
To display all files, including hidden ones, run:

```bash
ls -a
```

* ### Resetting Changes
To reset the current branch to a specified state, either unstaging changes or reverting to a previous commit, use:

```bash
git reset <options>
```

* ### Viewing Command History
To see the history of commands executed, use the following command:

```bash
history
```

## 4. Basic Bash Commands for File System Navigation

- ### Changing Directories
To navigate between directories, use:

```bash
cd <directory_name>
```
- To move to the parent directory:

```bash
cd ..
```
- To return to the home directory directly:

```bash
cd ~
```

- ### Creating a Directory
To make a new directory, use:

```bash
mkdir <new_directory>
```

- ### Removing a Directory
To delete an empty directory, run:

```bash
rmdir <empty_directory>
```

- ### Viewing Directory Contents
To display a list of files and subdirectories in a specific directory, use:

```bash
dir
```

- ### Creating an Empty File
To create a new empty file, use:

```bash
touch <new_file>
```

- ### Deleting a File
To remove a file from the directory, run:

```bash
rm <file_to_delete>
```

- ### Using the Echo Command
To display a line of text or the value of a variable, use:

```bash
echo <text_or_variable>
```
For instance:

```bash
echo "Hello, Git!"
```

- ### Clearing the Terminal Screen
To clear the terminal display, use:

```bash
cls
```

### Discussion:
Version control is a crucial practice in software development, and Git serves as a powerful tool for managing changes and facilitating collaboration. The initial step involves checking the Git version with git --version to ensure you have the latest updates.

Setting up Git requires configuring your username and email using git config, which associates your commits with your identity. Essential commands like git init, git add, and git commit allow developers to create repositories, stage files, and record changes with meaningful messages.

Collaboration is simplified through commands like git clone, which retrieves remote repositories, and git push and git pull, which synchronize local and remote changes. The git diff and git log commands provide insights into changes and commit history, crucial for tracking project evolution.

In addition to Git, basic Bash commands facilitate file system navigation. Commands such as cd, mkdir, and rm help manage directories and files effectively. The echo command displays messages, aiding in debugging.

Overall, mastering Git and Bash commands enhances development efficiency, supports teamwork, and fosters best practices in coding.