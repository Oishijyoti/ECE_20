
<p align="center">
  <img src="https://saif1024bd.wordpress.com/wp-content/uploads/2011/06/ruet-monogram-1545x1850.png?w=250" alt="RUET Logo" height="200">
</p><br>

<p align="center"><em>"Heaven's Light is Our Guide"</em></p>

# <p align='center'>Department of Electrical and Computer Engineering (ECE) - RUET</p>

<p align="center">

| Submitted To       | Submitted By             |
|--------------------|--------------------------|
| Oishi Joyti        | Nazmul Haque Naqib       |
| Assistant Professor| Roll:2010029             |
|Dept. of ECE, RUET  | Dept. of ECE, RUET       |
</p>

# Table of Contents

| No. | Experiment Name                                     | Content                                      |
|----|----------------------------------------------------|---------------------------------------------|
| 1  | Basic documentation using Markdown language        | 1. Experiment No <br> 2. Experiment Name <br> 3. Objectives <br> 4. Source code and Output <br> 5. Discussion |
| 2  | Best Coding Practices                              | 1. Experiment No <br> 2. Experiment Name <br> 3. Objectives <br> 4. Source code and Description <br> 5. Discussion |
| 3  | Study of Different Git Commands                    | 1. Experiment No <br> 2. Experiment Name <br> 3. Objectives <br> 4. Commands and Output <br> 5. Discussion |

<br>  

# Experiment No: 1

##  Experiment Name: 
Basic documentation using Markdown language

##  Objectives: 
- To grasp the fundamental syntax of Markdown.
- To master the creation of organized documentation using Markdown.
- To utilize Markdown for documenting experiments.

##  Source Code and Output: 

## Markdown Syntax Guide

### Heading Levels:
```markdown
# Heading 1
## Heading 2
### Heading 3
```
# Heading 1
## Heading 2
### Heading 3

### Bold Text:
```markdown
**bold text**
```
**bold text**
### Italic Text:
```markdown
*italic text*
_or_
_italic text_
```
*italic text*
### Strikethrough:
```markdown
~~strikethrough~~
```
~~strikethrough~~
### Unordered List:
```markdown
- Item 1
- Item 2
```
- Item 1
- Item 2
### Ordered List:
```markdown
1. First item
2. Second item
```
1. First item
2. Second item
### Link:
```markdown
[Google](https://www.google.com)
```
[Google](https://www.google.com)
### Image:
```markdown
![image](https://media.istockphoto.com/id/1316134499/photo/a-concept-image-of-a-magnifying-glass-on-blue-background-with-a-word-example-zoom-inside-the.jpg?s=612x612&w=0&k=20&c=sZM5HlZvHFYnzjrhaStRpex43URlxg6wwJXff3BE9VA=)
```
![image](https://media.istockphoto.com/id/1316134499/photo/a-concept-image-of-a-magnifying-glass-on-blue-background-with-a-word-example-zoom-inside-the.jpg?s=612x612&w=0&k=20&c=sZM5HlZvHFYnzjrhaStRpex43URlxg6wwJXff3BE9VA=)
### Blockquote:
```markdown
> This is a block quote
```
> This is a block quote
### Code Block:
```markdown
`` `
code goes here
`` `
```
```
code goes here
```


### Discussion:

In this experiment, the emphasis was on crafting well-structured documentation using Markdown. The document showcased various Markdown features such as headers, bold, italic, images, links, strikethrough, unordered lists, ordered lists, blockquotes, and code blocks.

1. **Headers**: Different header levels, from `Header 1` to `Header 6`, were used to organize content hierarchically, enhancing readability and logical structure.

2. **Bold**: Bold text, created by wrapping words in double asterisks (`**`), was used to emphasize important terms or phrases.

3. **Italic**: Italics, created using asterisks (`*`) or underscores (`_`), provided a subtler form of emphasis.

4. **Strikethrough**: Strikethrough text, achieved with double tildes (`~~`), was used to indicate outdated or irrelevant information without removing it.

5. **Links**: Hyperlinks were embedded to demonstrate how Markdown simplifies adding links, enhancing document interactivity and resourcefulness.

6. **Unordered List**: Unordered lists, created with dashes (`-`), asterisks (`*`), or plus signs (`+`), were used to organize information clearly.

7. **Images**: Images were embedded by linking to remote sources, showing how visual content can be seamlessly integrated into Markdown documents.

8. **Ordered List**: Ordered lists, created with numbers followed by periods (`.`), were used for step-by-step instructions or rankings.

9. **Blockquote**: Blockquotes, created with the greater-than symbol (`>`), were used to highlight quotes or key information.

10. **Code Block**: Code blocks, enclosed in triple backticks (```` ``` ````), were used to embed code snippets, which is particularly useful in technical documentation.

Overall, this experiment highlighted Markdown's versatility and simplicity for creating professional, structured documents. Markdown is especially useful in environments like GitHub, technical blogs, or collaborative documentation, where quick formatting and readability are essential. Its lightweight syntax allows for easy adoption while maintaining clarity across various content types.

#  Experiment No: 2


##  Experiment Name:
Best Coding Practices.

##  Objectives:
- To grasp and implement best practices for crafting clean, maintainable, and efficient code.
- To recognize essential principles that guarantee code quality, such as readability, reusability, and performance optimization.
- To understand how to integrate error handling, documentation, and modular design into coding.

## Source Code: Rust Example

```rust
fn main() {
    let radius = 5.0;
    match calculate_area(radius) {
        Ok(area) => println!("The area of the circle is: {:.2}", area),
        Err(e) => println!("Error: {}", e),
    }
}

fn calculate_area(radius: f64) -> Result<f64, String> {
    if radius <= 0.0 {
        return Err(String::from("Radius must be a positive number"));
    }
    let area = std::f64::consts::PI * radius.powi(2);
    Ok(area)
}
```

## Description:

The Rust code above demonstrates several best coding practices:

1. Error Handling: The calculate_area function returns a Result type, handling errors gracefully by returning an error message when the radius is invalid.
2. Pattern Matching: The main function uses a match statement to handle the Result from calculate_area, providing clear feedback based on whether the calculation was successful or not.
3. Constants: The code uses std::f64::consts::PI for the value of π, ensuring precision and readability.
4. Function Documentation: Although not shown here, adding comments and documentation to functions is a good practice for clarity and maintainability.

Overall, this example highlights how Rust's features can be used to write clean, efficient, and safe code. By following these practices, developers can create robust applications that handle errors gracefully and maintain high code quality.
## Discussion
This experiment highlights the significance of implementing best coding practices to ensure the software's longevity and maintainability. The following principles were demonstrated:

1. **Readability**: Writing clear and understandable code is essential for collaboration and future maintenance. Using descriptive variable names, documenting functions, and maintaining a structured code flow enhances readability.
2. **Error Handling**: Graceful error handling prevents unexpected program crashes. This is shown in the `calculate_area` function, where invalid input is managed with appropriate user feedback.
3. **Modularity**: Dividing code into smaller, reusable functions increases efficiency and simplifies testing. Functions like `calculate_area` can be reused in other parts of the project or in different projects.
4. **Documentation**: Clear and concise documentation, such as docstrings for each function, helps others (and your future self) understand the code's purpose and behavior without delving into the implementation details.
5. **Optimization**: The code avoids unnecessary calculations by importing only the required parts of the math module, which can enhance the efficiency and performance of larger programs.

In summary, adhering to best coding practices results in more scalable, bug-resistant, and maintainable code. Consistently applying these principles ensures that the code remains clean and adaptable to future changes.

#  Experiment No: 3

##  Experiment Name:
Study of Different Git Commands

##  Objectives:
- To comprehend the purpose and application of Git commands.
- To learn how to utilize Git for version control and team collaboration.
- To explore various Git commands for effective repository management.

## Commands and Output:

### 1. `git init`
**Command**: Initializes a new Git repository in the current directory.
```bash
$ git init
```
**Output**:
```
Initialized empty Git repository in /path/to/repo/.git/
```

### 2. `git clone`
**Command**: Clones an existing repository from a remote source.
```bash
$ git clone https://github.com/username/repo.git
```
**Output**:
```
Cloning into 'repo'...
remote: Enumerating objects: 10, done.
remote: Counting objects: 100% (10/10), done.
Receiving objects: 100% (10/10), 1.20 KiB | 200.00 KiB/s, done.
```

### 3. `git add`
**Command**: Adds files to the staging area before committing them.
```bash
$ git add file1.txt
```
**Output**:
```
(nothing displayed when successful)
```

### 4. `git commit`
**Command**: Commits the staged files with a message describing the changes.
```bash
$ git commit -m "Initial commit"
```
**Output**:
```
[main (root-commit) abc1234] Initial commit
 1 file changed, 1 insertion(+)
 create mode 100644 file1.txt
```

### 5. `git status`
**Command**: Displays the state of the working directory and the staging area.
```bash
$ git status
```
**Output**:
```
On branch main
nothing to commit, working tree clean
```

### 6. `git log`
**Command**: Shows the commit history of the repository.
```bash
$ git log
```
**Output**:
```
commit abc1234
Author: John Doe <johndoe@example.com>
Date:   Fri Oct 15 10:00:00 2024

    Initial commit
```

### 7. `git branch`
**Command**: Lists all branches in the repository or creates a new branch.
```bash
$ git branch
```
**Output**:
```
* main
```

### 8. `git checkout`
**Command**: Switches to a different branch or restores files.
```bash
$ git checkout -b feature-branch
```
**Output**:
```
Switched to a new branch 'feature-branch'
```

### 9. `git merge`
**Command**: Merges changes from one branch into another.
```bash
$ git checkout main
$ git merge feature-branch
```
**Output**:
```
Updating abc1234..def5678
Fast-forward
 file1.txt | 1 +
 1 file changed, 1 insertion(+)
```

### 10. `git push`
**Command**: Pushes the committed changes to a remote repository.
```bash
$ git push origin main
```
**Output**:
```
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Writing objects: 100% (3/3), 299 bytes | 299.00 KiB/s, done.
```

##  Discussion:

This experiment explored the use and practical application of several essential Git commands for software version control. Git is a crucial tool for tracking changes in source code, especially in collaborative development environments. Here are some key takeaways from the experiment:

1. Repository Management: Commands such as git init and git clone are fundamental for initializing and setting up repositories, facilitating smooth collaboration and version control.

2. Staging and Committing: The process of adding (git add) and committing (git commit) files ensures that changes are recorded with a descriptive message, making it easy to track the codebase's evolution.

3. Branching and Merging: By using git branch, git checkout, and git merge, developers can work on new features in isolated environments (branches) and merge them into the main codebase without disrupting ongoing work. This is crucial for parallel development and maintaining a clean workflow.

4. Viewing History: Commands like git status and git log provide an overview of the repository’s current state and its history. This helps developers understand what changes have been made and when.

5. Collaboration: Using git push and git pull, teams can synchronize their work with a remote repository, enabling smooth collaboration even across distributed teams.

In summary, mastering these basic Git commands improves workflow efficiency, reduces conflicts in collaborative projects, and ensures a well-organized codebase. Regular use of these commands helps maintain project integrity and fosters better coordination among team members.
