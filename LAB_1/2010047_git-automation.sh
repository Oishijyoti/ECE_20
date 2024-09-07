#!/bin/bash

# Function to check if a directory exists
function directory_exists() {
    [ -d "$1" ] && return 0
    return 1
}

# Function to create a new directory if it doesn't exist
function create_directory() {
    if ! directory_exists "$1"; then
        mkdir -p "$1"
    fi
}

# Function to initialize a Git repository
function init_git_repository() {
    git init
    git config --global user.name "Your Name"
    git config --global user.email "your_email@example.com"
}

# Get the project name from the user
read -p "Enter the project name: " project_name

# Create the project directory
create_directory "$project_name"

# Change to the project directory
cd "$project_name"

# Initialize the Git repository
init_git_repository

# Add a README file
echo "# $project_name" > README.md
git add README.md
git commit -m "Initial commit"

# Print a success message
echo "Git repository initialized for project '$project_name'"
