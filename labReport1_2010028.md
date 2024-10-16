<p align="center">
  <img src="https://saif1024bd.wordpress.com/wp-content/uploads/2011/06/ruet-monogram-1545x1850.png?w=250" alt="RUET Logo" height="200">
</p><br>

<p align="center"><em>"Heaven's Light is Our Guide"</em></p>

# Department of Electrical and Computer Engineering (ECE) - RUET<br> <p align='center'>20 Series</p>

<p align="center">

| Submitted To       | Submitted By             |
|--------------------|--------------------------|
| Oishi Joyti        | Mst. Rukaiya Islam Tonni |
| Assistant Professor| Roll:2010028             |
|Dept. of ECE, RUET   | Dept. of ECE, RUET        |

<br>

# Table of Contents

| No. | Experiment Name                                     | Content                                      |
|-----|----------------------------------------------------|---------------------------------------------|
| 1   | Basic documentation using Markdown language        | 1. Experiment No <br> 2. Experiment Name <br> 3. Objectives <br> 4. Source code and Output <br> 5. Discussion |
| 2   | Best Coding Practices                              | 1. Experiment No <br> 2. Experiment Name <br> 3. Objectives <br> 4. Source code and Description <br> 5. Discussion |
| 3   | Study of Different Git Commands                    | 1. Experiment No <br> 2. Experiment Name <br> 3. Objectives <br> 4. Commands and Output <br> 5. Discussion |

<br>  


##  Experiment No: 1


##  Experiment Name: 
Basic documentation using Markdown language

##  Objectives: 
- To understand the basic syntax of Markdown.
- To learn how to create structured documentation using Markdown.
- To implement Markdown for experiment documentation.

##  Source Code and Output: 


Heading Levels:<br>
# Heading 1
## Heading 2
### Heading 3

Bold Text:<br>
**bold text**

Italic Text:<br>
*italic text*
or
_italic text_

Strikethrough:<br>
~~strikethrough~~

Unordered List:<br>
- Item 1
- Item 2

Ordered List:<br>
 1. First item
 2. Second item

Link:<br>
[Unsplash](https://unsplash.com/)

Image:<br>
![image](https://images.unsplash.com/photo-1719937051157-d3d81cc28e86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8)

Blockquote:<br>
> This is a quote

Code Block:<br>
```
code goes here
```



### Discussion:

In this experiment, the focus was on creating well-structured documentation using Markdown language. The document demonstrated various Markdown features such as headers, bold, italic ,images, links, Strikethrough,Unordered List, Ordered List , Blockquote and code blocks.

1. **Headers**: Different levels of headers were used, ranging from `Header 1` to `Header 6`, to organize the content in a hierarchical manner. This is important for readability and structuring documents logically.

2. **Bold**: Bold formatting is often used to emphasize words or phrases. In Markdown, you can bold text by wrapping it in double asterisks (`**`).

3. **Italic**:Similar to bold, italics are used for emphasis but in a more subtle way. Italics can be created using either asterisks (`*`) or underscores (`_`).

4. **Strike-through**: The example also illustrated how to apply strike-through to text using `~~`. This can be helpful in situations where one wants to indicate outdated or irrelevant information without removing it.

5. **Links**: Links to external websites were embedded, showing how Markdown simplifies adding hyperlinks without complex HTML tags. This enhances navigation, making the document interactive and resourceful.

6. **Unordered List**:Lists are important for organizing information. An unordered list in Markdown is created using dashes (`-`), asterisks (`*`), or plus signs (`+`), with each item on a new line.

7. **Images**: Adding images within Markdown was shown by embedding a link to a remote image. This capability allows for visual content to be integrated seamlessly into documents, enriching the user experience.

8. **Ordered List**: For step-by-step instructions or rankings, an ordered list can be used. Numbers followed by a period (`.`) create numbered lists.

9. **Blockquote**:Blockquotes are useful for quoting other sources or highlighting key information. In Markdown, they are created by starting the line with a greater-than symbol (`>`).

10. **Code Block**: For embedding code snippets, use triple backticks (```` ``` ````) before and after the block of code. This is especially useful in technical writing or documentation.

Overall, this experiment demonstrated the versatility and simplicity of Markdown for creating professional and structured documents. It is particularly useful in environments like GitHub, technical blogs, or collaborative documentation, where quick formatting and readability are key. Markdown’s lightweight syntax allows for swift adoption while maintaining clarity across different types of content.

##  Experiment No: 2


##  Experiment Name:
Best Coding Practices.

##  Objectives:
- To understand and apply best practices for writing clean, maintainable, and efficient code.
- To identify key principles that ensure code quality, including readability, reusability, and performance optimization.
- To learn how to incorporate error handling, documentation, and modular design in coding.

## Source Code: Python Example

```python
def calculate_area(radius):
    """
    Function to calculate the area of a circle
    Args:
    radius (float): The radius of the circle
    
    Returns:
    float: The area of the circle
    """
    if radius <= 0:
        raise ValueError("Radius must be a positive number")
    
    import math
    area = math.pi * radius ** 2
    return area

def main():
    try:
        r = float(input("Enter the radius of the circle: "))
        print(f"The area of the circle is: {calculate_area(r)}")
    except ValueError as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    main()
```
## Description:

The Python code above follows several best coding practices:

1. Function Documentation: Each function is well-documented with a docstring explaining its purpose, parameters, and return values.
2. Error Handling: The calculate_area function includes error handling by raising an exception when an invalid radius is provided. This ensures robust code behavior.
3. Modular Design: The code is broken down into functions (calculate_area and main) for better readability and reusability. Modular design helps isolate logic, making testing and debugging easier.
4. Input Validation: The program ensures that the user enters a valid radius value before proceeding with calculations, improving user experience.
5. Main Guard (if __name__ == "__main__":): This guard ensures that the program executes properly when run as a script but not when imported as a module.
    
## Discussion:

This experiment emphasizes the importance of adopting best practices in coding to ensure the software’s long-term viability and maintainability. The following principles were applied:

1. Readability: Writing code that is easy to read and understand is crucial for collaboration and future maintenance. The use of clear variable names, function documentation, and structured code flow enhances readability.
2. Error Handling: Handling errors gracefully prevents the program from crashing unexpectedly. This is demonstrated in the calculate_area function, where invalid input is handled with appropriate feedback to the user.
3. Modularity: Breaking down code into smaller, reusable functions makes the program more efficient and easier to test. Functions like calculate_area can be reused in other parts of the project or across different projects.
4. Documentation: Clear and concise documentation, such as the docstrings provided for each function, helps others (and future you) understand the purpose and behavior of the code without diving too deep into the implementation.
5. Optimization: The code avoids unnecessary calculations by importing only the required parts of the math module. This practice can improve the efficiency and performance of larger programs.

Overall, the application of best coding practices makes code more scalable, reduces the likelihood of bugs, and improves maintainability. By consistently following these principles, developers can ensure that their code remains clean and adaptable to future changes.

##  Experiment No: 3

##  Experiment Name:
Study of Different Git Commands

##  Objectives:
- To understand the purpose and usage of Git commands.
- To learn how to use Git for version control and collaboration.
- To explore different Git commands for managing repositories.

##  Commands and Output:

### 1. `git init`
**Command**: Initializes a new Git repository in the current directory.
```bash
$ git init
```
### Output:
Initialized empty Git repository in /path/to/repo/.git/

### 2. `git clone`
**Command**I: Clones an existing repository from a remote source.
```
$ git clone https://github.com/username/repo.git

```
### Output:
Cloning into 'repo'...
remote: Enumerating objects: 10, done.
remote: Counting objects: 100% (10/10), done.
Receiving objects: 100% (10/10), 1.20 KiB | 200.00 KiB/s, done.

### 3. `git add`
**Command**: Adds files to the staging area before committing them.
```bash
$ git add file1.txt
```
### Output:
(nothing displayed when successful)


### 4. `git commit`
**Command**: Commits the staged files with a message describing the changes.
```bash
$ git commit -m "Initial commit"
```
### Output:
[main (root-commit) abc1234] Initial commit
 1 file changed, 1 insertion(+)
 create mode 100644 file1.txt

### 5. `git status`
**Command**: Displays the state of the working directory and the staging area.
```bash
$ git status
```
### Output:
On branch main
nothing to commit, working tree clean

### 6. `git log`
**Command**: Shows the commit history of the repository.
```bash
$ git log
```
### Output:
commit abc1234
Author: John Doe <johndoe@example.com>
Date:   Fri Oct 15 10:00:00 2024

    Initial commit
### 7. `git branch`
**Command**: Lists all branches in the repository or creates a new branch.
```bash
$ git branch
```
### Output:
* main

### 8. `git checkout`
**Command**: Switches to a different branch or restores files.
```bash
$ git checkout -b feature-branch

```
### Output:
Switched to a new branch 'feature-branch'


### 9. `git merge`
**Command**: Merges changes from one branch into another.
```bash
$ git checkout main
$ git merge feature-branch

```
### Output:
Updating abc1234..def5678
Fast-forward
 file1.txt | 1 +
 1 file changed, 1 insertion(+)

### 10. `git push`
**Command**: Pushes the committed changes to a remote repository.
```bash
$ git push origin main

```
### Output:
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Writing objects: 100% (3/3), 299 bytes | 299.00 KiB/s, done.

##  Discussion:

This experiment focused on the study and application of various Git commands used in software version control. Git is a powerful tool for tracking changes in source code during software development, especially in collaborative environments. Below are some key takeaways from the experiment:

1. Repository Management: Commands like git init and git clone are essential for initializing and setting up repositories, allowing for seamless collaboration and version control.

2. Staging and Committing: The process of adding (git add) and committing (git commit) files ensures that changes are recorded with a descriptive message, making it easy to track the evolution of the codebase.

3. Branching and Merging: Using git branch, git checkout, and git merge, developers can work on new features in isolated environments (branches) and merge them into the main codebase without disrupting ongoing work. This is vital for parallel development and maintaining a clean workflow.

4. Viewing History: Commands like git status and git log provide an overview of the repository’s current state and its history. This helps developers understand what changes have been made and when.

5. Collaboration: By using git push and git pull, teams can sync their work with a remote repository, enabling smooth collaboration even across distributed teams.

In conclusion, mastering these basic Git commands enhances workflow efficiency, reduces conflicts in collaborative projects, and ensures a well-organized codebase. Regular use of these commands helps maintain the integrity of the project and fosters better coordination among team members.