# zappy-task
simple app listen to a slack channel and get tweets from tweeter account based on specific message sent on a slack channel.

## How to Run?
1- clone project:
```bash
git clone https://github.com/ahmed-essam/zappy-task.git zappy
```
2- run app:

    # run each project 

        - go inside backend project and run "npm install" then run "npm start".

        - go inside frontend project and run "npm install" theen run "npm start".


    # To run project as docker image 

        - run "docker-compose build".

        - then "docker-compose up"


2- Use this link to join the slack channel https://join.slack.com/t/ex-essam/shared_invite/enQtNzM0OTQyOTgwMTkzLTg1NDQzYjMwYTY1N2YxNjE2NDM1YzU2MGI5YzkwOTg3NzA0N2UyNzA2NjFkZWYzZWQ1ZWIyN2I1ZmNmNmRhZGQ

3- Go to browser and navigating to "localhost:4200" in your browser

4- Send message throw the slack channel called "ex" contains the word "go" you will see that zappy has retrieved tweets from twitter account and posted them to frontend.

5- you can run backend unit test by running this command

```bash
npm test
```

## Used Technologies
Node.JS

Angular8

MongoDB

Mocha & Chai
