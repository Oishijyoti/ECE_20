# Experiment 3
## Name of the experiment: Basic git instructions


# Git Command Table


| **Git Command** | **Description** |
|--------|-----------|
| `git init` | Initializes a new Git repository in your current directory. This is the first step to start tracking your project with Git. |
| `git clone [address]` | Creates a local copy of a remote repository specified by the address (URL). It downloads the entire history of the project. |
| `git status` | Displays the state of the working directory and the staging area, showing which changes have been staged, which haven't, and which files aren't being tracked by Git. |
| `git commit -m "commit_message"` | Captures a snapshot of the project's current changes and saves it with a descriptive message, provided within the quotation marks. This message helps to understand what specific changes were made in this commit. For example: git commit -m "Fixed bug in user login" |
| `git branch` | Lists all the branches in your repository. The current branch will be marked with an asterisk (*). |
| `git branch [branch_name]` | Creates a new branch with the name `[branch_name]`. Useful for creating a separate line of development. |
| `git branch -d [branch_name]` | Deletes the branch named `[branch_name]`. Note that this will not delete the branch if it has unmerged changes. |
| `git merge [branch_name]` | Merges the specified branch into the current branch. This is used to integrate changes from one branch into another. |
| `git merge [source_branch] [target_branch]` | Merges the `[source_branch]` into the `[target_branch]`. This is useful for managing pull requests and branch merging strategies. |
| `git push origin [branch_name]` | Pushes the local branch named `[branch_name]` to the remote repository named `origin`. |
| `git push -u origin [branch_name]` | Sets the local branch `[branch_name]` to track the remote branch and pushes the initial set of commits. |
| `git push origin --delete [branch_name]` | Deletes the specified branch on the remote repository. Useful for cleaning up old branches. |
| `git pull` | Fetches changes from the remote repository and merges them into the current branch. This command keeps your local repository up to date. |
| `git log` | Shows the commit history of the branch, listing all the commits in reverse chronological order. |
| `git log --oneline` | Displays a simplified version of the commit history, showing each commit on a single line. |
| `git log --summary` | Provides a more detailed log, showing a summary of the changes made in each commit. |
