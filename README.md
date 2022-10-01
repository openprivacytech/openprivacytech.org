[![Netlify Status](https://api.netlify.com/api/v1/badges/d524e0a3-1cc6-49b4-b692-322dc4f833f3/deploy-status)](https://app.netlify.com/sites/quiet-mermaid-0c777f/deploys)

# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## Table of Contents
- [Installation](#installation)
- [Local Development](#local-development)
- [Build](#build)
- [Deployment](#deployment)
- [How to Contribute](#how-to-contribute)


### Installation

Using Yarn:

```
$ yarn
```

Using Npm:

```
$ npm install
```


### Local Development
Using Yarn:

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

Using Npm: 

```
$ npm start
```

### Build

Using Yarn:

```
$ yarn build
```

Using Npm:

```
$ npm build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
### How to Contribute
<p>
 Step 1: Fork this repository. <br>
 Step 2: Go to your GitHub profile and you will find a repository with the same name as the project. Clone this repository either using the "Download zip" button under the code section or using git commands,
         you can use the command:
  
    git clone `link of the project (your fork)`
  
  to clone your forked repository into your local machine.

  now change your dirctory to the project using the command:
  
    cd NAME_OF_REPOSITORY
  
 Now check if your fork is set to remote origin. A remote is basically a URL that points to the project repository and the one you forked. The project repository is called the 'Upstream' remote and your fork is called the 'origin' remote. You can check the status of remotes using the command: 
  
    git remote -v 
  
  you should see the word origin next to your fork, if you don't see it, you can use the command to add it: 
  
    git remote add origin URL_OF_FORK
  
  now add the project repository as 'Upstream' remote using the command:
  
    git remote add upstream URL_OF_PROJECT
  
  now again use the command:
  
    git remote -v
  
  to check the status of remotes.
  
  
  Now to update your repository with the main project, you need to use the command:
  
    git pull upstream master
  
  or
  
    git pull upstream main
  
  depending upon the branch of the main project.
  
  Now, you should create a new branch as working in the main branch could be risky incase of an error or bugs, to add a new branch you can use the command:
  
    git checkout -b BRANCH_NAME
  
  This also switches you to the new branch.
  
  And now you can make whatever changes you feel like to the code using various tools.
  After you are done making the required changes, you can stage those changes using the command: 
    
    git add -A
  
  and commit them using:
  
    git commit -m "A good description to the changes you made to the code."
  
  To push these changes you can use the command:
  
    git push origin BRANCH_NAME
  
  Going back to GitHub you may see a highlighted area which says "Compare and Pull Request", click that.
  This will send a pull request.
