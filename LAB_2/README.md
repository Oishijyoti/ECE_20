


# Basic Git Commands


## Configuration
Before using Git, configure your username and email address, which are associated with your commits.

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

To check your Git configuration:

```bash
git config --list
```


## Basic Commands

### `git init`
Initializes a new Git repository in the current directory. This command creates a hidden `.git` directory.

```bash
git init
```

### `git clone`
Clones an existing repository from a remote source like GitHub.

```bash
git clone https://github.com/username/repository.git
```

### `git status`
Shows the current state of the working directory and the staging area. It indicates changes that have been staged, changes that haven’t been staged, and files that aren’t being tracked by Git.

```bash
git status
```

### `git add`
Adds files to the staging area in preparation for a commit. Use `git add` to track new files or changes in existing files.

```bash
git add <filename>         # Adds a single file
git add .                  # Adds all changes
```

### `git commit`
Commits the staged changes with a message describing what was done.

```bash
git commit -m "Initial commit"
```

### `git push`
Sends your commits to the remote repository (e.g., GitHub). This is how you share your changes with others.

```bash
git push origin main       # Pushes changes to the 'main' branch
```

### `git pull`
Fetches and merges changes from the remote repository into your local repository.

```bash
git pull origin main       # Pulls changes from the 'main' branch
```

### `git branch`
Lists, creates, or deletes branches. A branch is a separate line of development.

- To list all branches:
  ```bash
  git branch
  ```

- To create a new branch:
  ```bash
  git branch <branch_name>
  ```

- To delete a branch:
  ```bash
  git branch -d <branch_name>
  ```

### `git checkout`
Switches between branches or restores files. 

- To switch to another branch:
  ```bash
  git checkout <branch_name>
  ```

- To create a new branch and switch to it:
  ```bash
  git checkout -b <new_branch_name>
  ```

### `git merge`
Merges changes from one branch into another. First, switch to the branch you want to merge into, and then run the merge command.

```bash
git checkout main            # Switch to the main branch
git merge <branch_name>      # Merge 'branch_name' into 'main'
```

## Conclusion
This guide covers the basic Git commands one needs to start managing one's project. Understanding and practicing these commands will help an individual to  maintain better control of his code, collaborate with others, and keep his workflow organized.




