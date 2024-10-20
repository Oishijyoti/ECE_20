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
Version control is a crucial practice in software development, and Git serves as a powerful tool for managing changes and facilitating collaboration. The initial step involves checking the Git version with git --version to ensure you have the latest updates.Setting up Git requires configuring your username and email using git config, which associates your commits with your identity. Essential commands like git init, git add, and git commit allow developers to create repositories, stage files, and record changes with meaningful messages.Collaboration is simplified through commands like git clone, which retrieves remote repositories, and git push and git pull, which synchronize local and remote changes. The git diff and git log commands provide insights into changes and commit history, crucial for tracking project evolution.In addition to Git, basic Bash commands facilitate file system navigation. Commands such as cd, mkdir, and rm help manage directories and files effectively. The echo command displays messages, aiding in debugging.Overall, mastering Git and Bash commands enhances development efficiency, supports teamwork, and fosters best practices in coding.