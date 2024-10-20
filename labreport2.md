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

This task management application demonstrates a practical implementation of various naming conventions in HTML, CSS, and JavaScript. Each part of the code follows specific conventions to enhance readability and maintainability.**HTML**: In the HTML structure, kebab-case is used for class names and attributes, such as `task-manager` and `addTaskButton`. This naming convention is widely adopted for HTML elements as it improves clarity and consistency across the document.**CSS**: The CSS also employs kebab-case for class selectors and properties, maintaining the same convention used in the HTML. For instance, the class `.header` and the ID `#taskList` are defined using this style, which makes it easy to link the CSS to the respective HTML elements**JavaScript**: The JavaScript portion introduces multiple naming conventions. Constants are defined using **SCREAMING_SNAKE_CASE**, like `MAX_TASKS`, to indicate that their values should remain unchanged throughout the application. Class names, such as `TaskManager`, utilize **PascalCase**, while variables and function names are in **camelCase** (e.g., `taskManager`, `addTask`). This differentiation helps to quickly identify the purpose of each identifier within the codeOverall, these naming conventions contribute to a well-structured codebase, making it easier for developers to read, understand, and collaborate on the application. By adhering to these conventions, the task management application not only functions effectively but also serves as an example of best practices in coding standards.