# Trains Schedule App

This repo contains both frontend (React + Typescript) and backend (Spring Boot + H2 Database) code for Trains Schedule app. Trains Schedule app allows you to to enter details about different trains and display all the trains schedule information.

# What do you need for the Environment?
* Firstly download [Node](https://nodejs.org/) (\supports Node 10.3+, but the latest Node LTS is always recommended). Use [this](https://www.youtube.com/playlist?list=PLBBog2r6uMCQN4X3Aa_jM9qVjgMCHMWx6) for step by step installation guide 
*  Java 8 and Eclipse - Oxygen+ - (Embedded Maven From Eclipse). Use [this](https://www.youtube.com/playlist?list=PLBBog2r6uMCSmMVTW_QmDLyASBvovyAO3) for step by step installation guide ( Preffred Eclipse version: eclipse-jee-2020-06)
* Any editor or your choice

# How to Run the Project
* clone the repo on your machine: `git clone 'GITHUB_PROJECT_URL'`
* navigate inside the downloaded project: `cd trains-full-stack-app`
* open eclipse
* import the trains-web-services: `File -> Import -> search and select 'Existing Maven Projects' -> Browse -> Select the folder 'trains-web-services' -> Click on Finish`
* wait for sometime until project finishes downloading all the dependencies
* click on project folder in the Project Explorer` and click on run button
* you will see `Tomcat started on port(s): 8080` message in the console
* open terminal inside the project folder
* navigate inside the trains-frontend-app folder: `cd trains-frontend-app`
* run `npm install` which will install all the dependencies modules for the project
* run `npm start`
* it will open the website in the browser, you are all set to use the app
* add trains data or check the trains schedule using the buttons

_Note: The project is using [H2 in-memory database](https://www.h2database.com/html/main.html), which means that data will not persist on the disk. 
Once you will stop the backend server in eclipse, the trains data entered by you will be lost_ 


# Documentation & Useful links
* [Sprint Initializr](https://start.spring.io/)
* [Create React App](https://create-react-app.dev/docs/getting-started/)
* [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/docs/basic/setup)
