# Experiment no: 3
# Experiment name:
basic git commnands
# objectives:
* to understand the commands for git operations 
# source code and output:
| Command | Description |
| ------- | ----------- |
| `git init` | Initializes a Git repository in the current directory. |
| `git add [file-name.txt]` | Adds a file to the staging area, preparing it for a commit. |
| `git commit -m "commit_message"` | Commits the staged changes to the repository with a message. |
| `git clone [address]` | Creates a local copy of a remote repository. |
| `git status` | Checks the status of files in the working directory and staging area. |
| `git pull` | Fetches and merges changes from the remote repository to the local repository. |
| `git branch` | Lists all branches, with `*` indicating the current branch. |
| `git branch -a` | Lists all branches, including local and remote branches. |
| `git branch [branch_name]` | Creates a new branch with the specified name. |
| `git branch -d [branch_name]` | Deletes the specified branch locally. |
| `git push origin --delete [branch_name]` | Deletes the specified branch from the remote repository. |
| `git merge [branch_name]` | Merges the specified branch into the current active branch. |
| `git merge [source_branch] [target_branch]` | Merges the source branch into the target branch. |
| `git push origin [branch_name]` | Pushes the specified branch to the remote repository. |
| `git push -u origin [branch_name]` | Pushes changes to the remote repository and sets it as the upstream branch. |
| `git push origin --delete [branch_name]` | Deletes the specified branch from the remote repository. |
| `git remote add origin ssh://git@github.com/[username]/[repository-name].git` | Adds a remote repository to the current project. |
| `git log` | Shows the commit history of the repository. |
# Discussion:
Git is a version control system that helps to track changes in our code and collaborate with others. GitHub is a platform that hosts our Git repositories online, making it easier to share and work on projects with others. We use Git on our local machine to manage our code, and then push our changes to GitHub to collaborate and keep everything in sync.
