# Experiment No: 03

# Experiment Name:

Basic Git Commands

# Objectives:

- To familiarize with fundamental Git commands used for version control.

## Source Code and Output:

| Command                                                                         | Description                                                                    |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `git init`                                                                      | Initializes a Git repository in the current directory.                         |
| `git clone [address]`                                                           | Creates a local copy of a remote repository.                                   |
| `git remote add origin [ssh://git@github.com/[username]/[repository-name].git]` | Adds a remote repository to the current project.                               |
| `git add [file-name.txt]`                                                       | Adds a file to the staging area, preparing it for a commit.                    |
| `git commit -m "commit_message"`                                                | Commits the staged changes to the repository with a message.                   |
| `git status`                                                                    | Checks the status of files in the working directory and staging area.          |
| `git log`                                                                       | Shows the commit history of the repository.                                    |
| `git pull`                                                                      | Fetches and merges changes from the remote repository to the local repository. |
| `git push origin [branch_name]`                                                 | Pushes the specified branch to the remote repository.                          |
| `git push -u origin [branch_name]`                                              | Pushes changes to the remote repository and sets it as the upstream branch.    |
| `git branch`                                                                    | Lists all branches, with `*` indicating the current branch.                    |
| `git branch -a`                                                                 | Lists all branches, including local and remote branches.                       |
| `git branch [branch_name]`                                                      | Creates a new branch with the specified name.                                  |
| `git branch -d [branch_name]`                                                   | Deletes the specified branch locally.                                          |
| `git push origin --delete [branch_name]`                                        | Deletes the specified branch from the remote repository.                       |
| `git merge [branch_name]`                                                       | Merges the specified branch into the current active branch.                    |
| `git merge [source_branch] [target_branch]`                                     | Merges the source branch into the target branch.                               |
| `git stash`                                                                     | Temporarily saves changes that are not ready to be committed.                  |
| `git checkout [branch_name]`                                                    | Switches to the specified branch.                                              |
| `git fetch`                                                                     | Fetches changes from the remote repository without merging.                    |
| `git reset [file-name.txt]`                                                     | Unstages a file, keeping its changes in the working directory.                 |

# Discussion:

Git is a powerful version control system that enables tracking of code changes and collaboration among developers. GitHub serves as an online platform for hosting Git repositories, facilitating project sharing and teamwork. By using Git locally, developers manage their code effectively and can easily sync changes to GitHub for collaborative work. The enhanced command set empowers users to efficiently handle branching, merging, and managing changes within their projects.
