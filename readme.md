# Exploring git!

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

## Working the project

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
   - `git checkout main`
     switch to main
   - `git merge new-branch`
     merge changes into main
