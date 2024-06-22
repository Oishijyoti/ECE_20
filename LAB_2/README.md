# Study of Different Git Commands

Git is a distributed version control system used to track changes in source code during software development. Here are some fundamental Git commands:

## 1. Configuration

### Set My user Name and Email
``` bash
git config --global user.name "tahmina"
git config --global user.email "tahminaaktarrupa@gmail.com"
```
![my-config](https://i.ibb.co/NxVVCnv/Screenshot-2024-06-22-185003.png)
2. ## Repository Management
 Initialize a New Repository

``` bash
git init

```
## Clone an Existing Repository
``` bash
git clone https://github.com/user/repo.git
```
 Basic Snapshotting
Check the Status of Your Files
``` bash
git status
git commit -m "Commit message"

```
4. Branching and Merging
Create a New Branch
``` bash 
git branch new-branch
Creates a new branch named new-branch.
```

Switch to a Branch
``` bash
git checkout branch-name
Switches to the branch named branch-name.
```

Create and Switch to a New Branch
``` bash
git checkout -b new-branch
Creates and switches to a new branch named new-branch.
```

Merge a Branch into the Current Branch
``` bash
git merge branch-name
Merges the branch named branch-name into the current branch.
```