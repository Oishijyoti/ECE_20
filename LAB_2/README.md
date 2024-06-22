````markdown
# Study of Different Git Commands

Git is a distributed version control system used to track changes in source code during software development. Here are some fundamental Git commands:

---

## 1. Configuration

### Set My user Name and Email

```bash
git config --global user.name "NabilaFerdousPrapty"
git config --global user.email "nabilaferdousprapty@gmail.com"
```
````

## ![my-config](https://i.ibb.co/KrBr4Ff/Screenshot-2024-06-22-203230.png)

## 2. Repository Management

### Initialize a New Repository

```bash
git init
```

### Clone an Existing Repository

```bash
git clone https://github.com/user/repo.git
```

---

## 3. Basic Snapshotting

### Check the Status of Your Files

```bash
git status
```

### Stage Changes for Commit

```bash
git add .
```

### Commit Changes

```bash
git commit -m "Commit message"
```

---

## 4. Branching and Merging

### Create a New Branch

```bash
git branch new-branch
```

Creates a new branch named `new-branch`.

### Switch to a Branch

```bash
git checkout branch-name
```

Switches to the branch named `branch-name`.

### Create and Switch to a New Branch

```bash
git checkout -b new-branch
```

Creates and switches to a new branch named `new-branch`.

### Merge a Branch into the Current Branch

```bash
git merge branch-name
```

Merges the branch named `branch-name` into the current branch.

---

## Workflow Followed

1. **Forked the repository**

### Typical Workflow for Contributing to a Repository

1. **Going to my repository.**
   [my-repo-link](https://github.com/NabilaFerdousPrapty?tab=repositories)
2. **Cloning the repository to my local machine.**

```bash
git clone https://github.com/NabilaFerdousPrapty/ECE_20-Software-Engineering-and-Information-Systems-Design.git
```

3. **After completing my lab report, save it into the directory.**
4. **Go to the directory. Then right-click and select Terminal.**
5. **Write the following commands step-by-step:**

   ```bash
   git add .
   git commit -m "2010035"
   git push -u origin main
   ```

6. **Going to the GitHub repository (the one I forked)** [Link-of the repo](https://github.com/NabilaFerdousPrapty/ECE_20-Software-Engineering-and-Information-Systems-Design.git)
7. **Click on "Contribute" then "Pull Request".**

8. **Then Wrote the commit message (RUET ECE 20 Series Roll:2010035). Then clicked on "Create Pull Request".**

---

This README.md provides an overview of essential Git commands commonly used in software development workflows, enhanced with styling and a workflow example for contributing to repositories.

```

```
