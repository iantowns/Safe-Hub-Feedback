# Safe-Hub-Feedback
Safe Hub Feedback is a webapp for submitting anonymous feedback to the cool people at <a href=http://safehubcollective.org/">Safe Hub Collective</a>. Its goal is to be a fun and productive learning experience for aspiring developers interested in creating safer digital spaces!

# Get Started
If you are totally new to Safe Hub Feedback, you'll need to get your dev environment up and running, which really is half the battle of any new dev project.

### Github
Being that this is GitHub Repo, you'll need to create a GitHub account and install Git. You're already on GitHub, so you can navigate to the sign-up page and make an account there. Then you can <a href="https://help.github.com/articles/set-up-git/"> set-up Git</a> on your computer. Git, the protocol for managing projects on GitHub, can be a bit confusing, but there are great tutorials out there. Once you install Node.js below, you can try a cool <a href="http://nodeschool.io/#workshoppers">interactive tutorial</a> from the command line to get more familiar. The <a href="http://www.git-scm.com/">Git documentation</a> is a great resource too.

### Node.js
This webapp uses Node.js as its web application, so you'll need to install Node (and its very cool package manager NPM). You can follow the instructions <a href="https://nodejs.org/download/">here</a>.

To become a savvy Node guru, you'll want to know Javascript first. Once you've installed Node, you can run this <a href="http://nodeschool.io/#workshoppers">great interactive tutorial</a> from your command line to learn some essential Javascript. Then, you can get to work on learning Node from a similar <a href="http://nodeschool.io/#workshoppers">interactive tutorial</a>.

### Express
Express is a middleware framework that runs Node. Basically, this gives us a lot of built-in functionality to run our webapp so that we don't have to reinvent the wheel whenever we want to serve web pages, accept REST-ful requests, etc. You can read more about Express <a href="http://expressjs.com/">here</a>, but you probably won't have to touch it too often for this app.

To install Express, simply run <code>npm install express</code> from the command line.

### PostgreSQL
PostgreSQL is a powerful SQL database that we will use to store our feedback data. For an introduction and tutorial to SQL, check out <a href="http://www.sql-tutorial.com/sql-introduction-sql-tutorial/">this resource</a>. Until you're ready to start submitting data to our app, you don't need to have this installed.

To install PostgreSQL, run <code>brew install postgresql</code> (or whatever your package manager of choice demands). Then follow the <A href="https://wiki.postgresql.org/wiki/First_steps">First Steps Guide</a> to set up your database and its user (you).

pgAdmin is a database client that will let you interact with your database through a GUI, rather than the command line. You'll probably spend most of your SQL time here! Install it according to <a href="http://www.pgadmin.org/download/">these instructions</a> and learn the basics of how to use it <a href="http://www.pgadmin.org/docs/dev/using.html">here</a>.

# Running The App
To get the app running smoothly, you have to this project checked out locally on your computer. You'll also have to have all the necessary environment variables set in your environment (more on this once we build the app out).

To run the app, navigate to the project directory and run <code>node app.js</code>. You can then visit <a href="http://localhost:3000/">http://localhost:3000/</a> and see our app alive!
