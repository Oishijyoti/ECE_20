<p align="center">
  <img src="https://saif1024bd.wordpress.com/wp-content/uploads/2011/06/ruet-monogram-1545x1850.png?w=250" alt="RUET Logo" height="200">
</p><br>

<p align="center"><em>"Heaven's Light is Our Guide"</em></p>

# Department of Electrical and Computer Engineering (ECE) - RUET<br> <p align='center'>20 Series</p>

<p align="center">

| Submitted To   | Submitted By    |
|----------------|----------------|
| Oishi Joyti    | Nawsheen Sharmila |
| Assistant Professor,<br>Dept of ECE  | Roll:2010021   |
<br>


# Table Of content
# Table of Contents

| No. | Experiment Name                                     | Content                                      |
|-----|----------------------------------------------------|---------------------------------------------|
| 1   | Basic documentation using Markdown language        | 1. Experiment No <br> 2. Experiment Name <br> 3. Objectives <br> 4. Source code and Output <br> 5. Discussion |
| 2   | Best Coding Practices                              | 1. Experiment No <br> 2. Experiment Name <br> 3. Objectives <br> 4. Source code and Description <br> 5. Discussion |
| 3   | Study of Different Git Commands                    | 1. Experiment No <br> 2. Experiment Name <br> 3. Objectives <br> 4. Commands and Output <br> 5. Discussion |

<br>  


## 1. Experiment No: 
1

## 2. Experiment Name: 
Basic documentation using Markdown language

## 3. Objectives: 
- To understand the basic syntax of Markdown.
- To learn how to create structured documentation using Markdown.
- To implement Markdown for experiment documentation.

## 4. Source Code and Output: 


### Types of header
# Header 1
## Header 2
### Header 3
#### Header 4
##### Header 5
###### Header 6

### Emphasis
_This is italic writting using underscore_<br>
*This is italic writting using star*<br>

__This is bold writting using dash__<br>
**This is bold writting using star**<br>

***This is bold and italic writing using star***<br>
___This is bold and italic writing using dash___<br>

### Strike through
~~A line through the text~~<br>


### Links
[https://www.w3schools.com/js/default.asp]<br>

[https://codeforces.com/]<br>


### table
| Name      | Age | Occupation     |
|-----------|-----|----------------|
| John Doe  | 25  | Software Engineer |
| Jane Smith| 30  | Data Scientist    |
| Bob Brown | 28  | Product Manager   |


### image
![Landscape](https://www.w3schools.com/w3images/lights.jpg)



### Source Code:
```python
def display_message():
    print("HELLO WORLD.")

# Call the function
display_message()
```


###Discussion

### Discussion:

In this experiment, the focus was on creating well-structured documentation using Markdown language. The document demonstrated various Markdown features such as headers, emphasis, tables, images, links, and code blocks.

1. **Headers**: Different levels of headers were used, ranging from `Header 1` to `Header 6`, to organize the content in a hierarchical manner. This is important for readability and structuring documents logically.

2. **Emphasis**: Markdown offers multiple ways to emphasize text. Italics were applied using both underscores (`_`) and stars (`*`), while bold text was demonstrated using double underscores (`__`) and double stars (`**`). Additionally, bold and italic combinations were shown to highlight key points within the text.

3. **Strike-through**: The example also illustrated how to apply strike-through to text using `~~`. This can be helpful in situations where one wants to indicate outdated or irrelevant information without removing it.

4. **Links**: Links to external websites were embedded, showing how Markdown simplifies adding hyperlinks without complex HTML tags. This enhances navigation, making the document interactive and resourceful.

5. **Tables**: The inclusion of a table demonstrated how Markdown can organize data effectively in a tabular format. This is especially useful for presenting structured information like comparisons, datasets, or lists.

6. **Images**: Adding images within Markdown was shown by embedding a link to a remote image. This capability allows for visual content to be integrated seamlessly into documents, enriching the user experience.

7. **Source Code**: The Python code block showcased how Markdown supports syntax highlighting for various programming languages. This feature is useful in technical documentation, allowing code to be easily readable and formatted.

Overall, this experiment demonstrated the versatility and simplicity of Markdown for creating professional and structured documents. It is particularly useful in environments like GitHub, technical blogs, or collaborative documentation, where quick formatting and readability are key. Markdown’s lightweight syntax allows for swift adoption while maintaining clarity across different types of content.





## 1. Experiment No:
3

## 2. Experiment Name:
Study of Different Git Commands

## 3. Objectives:
- To understand the purpose and usage of Git commands.
- To learn how to use Git for version control and collaboration.
- To explore different Git commands for managing repositories.

## 4. Theory:
Git is a distributed version control system that tracks changes in source code during software development. It allows multiple developers to work on the same project without overwriting each other's contributions. Key concepts in Git include repositories, commits, branches, and merges. This experiment focuses on studying different Git commands, their uses, and how they contribute to efficient version control.

### Key Git Commands:
1. `git init`: Initializes a new Git repository.
2. `git clone`: Clones an existing repository into a new directory.
3. `git status`: Displays the state of the working directory and the staging area.
4. `git add`: Adds changes to the staging area for the next commit.
5. `git commit`: Records the changes in the repository.
6. `git log`: Shows the commit history of the repository.
7. `git push`: Uploads local repository content to a remote repository.
8. `git pull`: Fetches changes from a remote repository and merges them into the local repository.
9. `git branch`: Lists, creates, or deletes branches in a repository.
10. `git merge`: Merges changes from one branch into another.

## 5. Procedure:

1. **Initialize a Git repository**:
   - Use `git init` to initialize a new Git repository in the current directory.
   - Example:
     ```bash
     git init
     ```

2. **Clone an existing repository**:
   - Use `git clone` to clone a remote repository.
   - Example:
     ```bash
     git clone https://github.com/username/repository.git
     ```

3. **Check repository status**:
   - Use `git status` to check the current status of the repository.
   - Example:
     ```bash
     git status
     ```

4. **Add files to the staging area**:
   - Use `git add` to add specific files or all changes to the staging area.
   - Example:
     ```bash
     git add filename.txt
     git add .
     ```

5. **Commit changes**:
   - Use `git commit` to save changes to the repository with a message.
   - Example:
     ```bash
     git commit -m "Initial commit"
     ```

6. **View commit history**:
   - Use `git log` to view the commit history.
   - Example:
     ```bash
     git log
     ```

7. **Push changes to a remote repository**:
   - Use `git push` to upload changes to a remote repository (like GitHub).
   - Example:
     ```bash
     git push origin main
     ```

8. **Pull updates from a remote repository**:
   - Use `git pull` to fetch and merge changes from the remote repository.
   - Example:
     ```bash
     git pull origin main
     ```

9. **Branch management**:
   - Use `git branch` to create and list branches.
   - Example:
     ```bash
     git branch new-feature
     git checkout new-feature
     ```

10. **Merge branches**:
    - Use `git merge` to merge changes from one branch into another.
    - Example:
      ```bash
      git checkout main
      git merge new-feature
      ```

## 6. Source Code and Output:

### Commands:
```bash
# Initialize a new repository
git init

# Clone a repository
git clone https://github.com/username/repository.git

# Check status
git status

# Add files
git add .

# Commit changes
git commit -m "Initial commit"

# Push changes
git push origin main

# Pull updates
git pull origin main

# Create a new branch
git branch feature-branch

# Merge branches
git merge feature-branch

### Discussion:

In this experiment, we studied key Git commands essential for managing code. 

1. **Repository Setup**: We used `git init` to start a new repository and `git clone` to copy an existing one. This allows us to either begin a new project or work with an existing codebase.

2. **Tracking and Staging**: `git status` helps check the current state of our files, and `git add` stages changes for the next commit. This keeps our work organized and ready for version control.

3. **Committing and Sharing**: With `git commit`, we save our changes with a message. `git push` uploads these changes to a remote repository, while `git pull` updates our local copy with changes from others.

4. **Branching**: We used `git branch` to manage different lines of development and `git merge` to combine changes from different branches.

Overall, these commands help us keep track of changes, collaborate with others, and manage different versions of our code efficiently.
