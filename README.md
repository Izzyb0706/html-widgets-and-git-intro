### **Basic Git Concepts**

1.  **Repository (Repo)**
    A project folder that Git is tracking. Can be
    **local** (on your computer) or
    **remote** (Like GitHub)
2.  **Version Control**
    A stystem that tracks changes to code
    over times, letting you revert to previous versions or collaborate with
    others.
3.  **Commit**
    A snapshot of your changes. Includes a
    message describing what changed.
4.  **Working Directory**
    The current state of your files on
    disk.
5.  **Staging Area**
    Where you prepare changes before
    committing. You "stage" files that are
    ready to be committed

---

### **Common Commands**

6. `git init`
   initializes a new Git repository in a
   folder.
7. `git status`
   Shows the current state of the working
   directory and staging area.
8. `git add <file>`
   Stages changes in a file for the next
   commit.
9. `git commit -m "message"`
   Saves the staged changes with a commmit
   message
10. `git push`
    Sends local commits to the remote
    repository.
    **Note**: You may need to first create
    a repo in github, and use `add origin`
    to link your local repo to the remote
    ones.
11. `git pull`
    Fetches and merges changes from the
    remote repository to your local one.
12.  `git fetch`
      Downloads changes from the remote, but
     doesn't merge them automatically    
