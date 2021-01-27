# Exploring Git!

> Jan 2021

## Description
> This is a space for playing with Git in conjunction with a couple of Pluralsight courses ([ref](https://github.com/richardaspinall/explore-git/blob/main/readme.md#resources)). I've listed some steps that I took to test out and get familar with it. 

## Goals
> To get better at using Git so I can work projects more efficiently and also collaborate. Obviously this should naturally come second nature while working on projects but I want to ensure I don't ignore any best practices. Plus being able to use and traverse Git means I can more safely modify projects and save a lot of time or headaches!

## Set up steps:

1. Created a folder on local system called "explore-git"
2. Initializing git:
   - `git init`
3. Added and commited current project
   - `git add .`
   - `git commit -m "created project and initialized git"`
     option `m` is a shortcut to add a commit message
4. Editing `master` branch name to `main`
   - `git branch -m master main`
     option `m` means move/rename file (master -> main)
5. Create remote repository on Github
6. Push local reporistory to remote
   - `git remote add origin https://github.com/richardaspinall/explore-git.git`
   - `git push -u origin main`
     `remote add origin` sets the remote repo URL to "origin"
     option `u` sets the upstream link to origin and push pushes main to it
     now we can simply enter `git push`

**We are now have our local repo linked and up to date with a remote one!**

## Working a project

### Regularly adding and commiting work

1. Added some more content to this readme
2. Add everything to staging ready for commit
   - `git add .`
     `.` means add everything that has been modified, could instead choose specific files
3. Commit the content
   - `git commit -m "Updated readme`

The above 2 steps can be rolled up into one command `git commit -am "Updated readme"`

4. Push to remote
   - `git push`

### Restoring work

1. Added some content and then restored:
   - `git restore .`
     restores everything back to the last commit
2. Added work to staging and restored
   - `git add .`
   - `git restore --staged .`
3. Added to staging, then commited, then reverted the commit
   - `git commit -am "Commit to revert"`
   - `git log` or `git log --oneline` (simplify output)
     log commits
   * `git revert <commit>`
     revert the commit

### Looking at an old commit and creating a new branch then pulling it into main

1. Added a new file, commited and then reverted the commit
2. Detached the commit and then created a new branch from it
   - `git log`
   - `git checkout <commit>`
     checks out the commit
   - `git switch -c <branch-name>`
     creates a new branch and switches to it (`git branch new-branch` -> `git switch new-branch`)
   - `git commit -am "Commited on new branch"`
3. Switch to main and merge "new-branch"
   - `git checkout main`
     switch to main
   - `git merge new-branch`
     merge changes into main

### Pulling changes into new branch

1. Changed readme on main
2. Switched over to new-branch
3. Made a commit on new-branch
4. Merged main into new-branch
   - `git merge main`
5. Resolved conflicts and commited

### Updating new branch merging into main then deleting new branch

1. Updated new-branch
2. Create upstream branch and set remote
   - `git push --set-upstream origin new-branch`
3. Switched to main
4. Merged new-branch
5. Deleted new-branch
   - `git branch -d new-branch`
     delete the local branch
   - `git push origin --delete new-branch`
     delete the remote branch

### Fetch updates from remote repository

1. Updated and commited on the readme on Github / Remote repository (like someone else would be working on the project)
2. Pulled in the changes
   - `git pull` (Can use `git fetch` to just check if there has been updates)
   
## Resources
* [How Git Works](https://www.pluralsight.com/courses/how-git-works)
* [Mastering Git](https://www.pluralsight.com/courses/master-git)
