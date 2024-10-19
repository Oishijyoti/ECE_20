# Study of Different Git Commands

Basic commands of gits are discussed below

## 1. Version check
Checks the installed version of Git.



``` bash
git --version
```

## 2. Configuration
* ### Set user Name and Email
``` bash
git config --global user.name "Pinky"
git config --global user.email "pinkyrani28@gmail.com"
```
* ### Configuration check
Displays the current Git configuration settings.


``` bash
git config --list
```

* ### Configurationcheck
Displays the current Git configuration settings.


``` bash
git config
```

## 3. Basic Git Commands
*  ## Git initialization

Initializes a new Git repository in the current directory or reinitializes an existing one.

``` bash
git init
```

*  ## Add files

Stages a file, preparing it for the next commit.

``` bash
git add <file_name>
```

*  ## Git commit

 This command creates a new commit with the changes staged in the staging area.

``` bash
git commit -m "<commit_message>"
```



*  ## Git Clone

Clones an existing remote repository to the local machine.


``` bash
git clone <repository_url>
```



*  ## Git status

Displays the status of the working directory and the staging area. This command shows which files are modified, staged, or untracked.

``` bash
git status
```


*  ## Git push

Uploads local commits to a remote repository.


``` bash
git push <remote_name> <branch_name>
```


*  ## Git pull

Fetches and merges changes from a remote repository to the local repository.


``` bash
git pull <remote_name> <branch_name>
```



*  ## Git remove

Removes a file from both the working directory and the staging area.


``` bash
git rm <file_name>
```



*  ## List

Displays the list of files in the current directory.


``` bash
ls 
```
Displays all files, including hidden files.


``` bash
ls -a
```



*  ## History
 
Displays the commit history with details of each commit.


``` bash
history
```

## 4.  Basic Bash Commands for File System Navigation

- ## Change Directory
Moves between directories in your file system.

```bash
cd <directory_name>
```
- Move to the parent directory:

```bash
cd ..
```
- Move directly to the home directory:

```bash
cd ~
```
## Make Directory

```bash
mkdir <directory_name>
```


## Remove Directory
Deletes an empty directory.

```bash
rmdir <directory_name>
```



## Create an Empty File
```bash
touch <file_name>
```

## Remove a File
Deletes a file from the directory.

```bash
rm <file_name>
```


## Echo Command
Displays a line of text or variable value.

```bash
echo <text_or_variable>
```

For example:

```bash
echo "Hello, World!"
```

## Clear Screen
Clears the terminal screen.

```bash
cls
```
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