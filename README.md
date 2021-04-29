# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


<h1>Bon Vivant</h1>

A collection of recipes for people to share and review. 

This react application was created as a project requirement for the <a href="https://flatironschool.com/career-courses/coding-bootcamp/online">Flatiron Online Software Engineering Program</a>.

For more information, check out <a href="https://gracenak.medium.com/understanding-dom-and-the-three-pillars-df6d7675c662">my blog</a> and a <a href="https://www.youtube.com/watch?v=r4Jg6Goo1lM&feature=youtu.be">walkthrough demonstration</a> of this project.

An MVP React Frontend application with a Rails API backend that demonstrates Client-Server Communication and uses:
<h4>React</h4>
<ul>
    <li> OOJS classes and functions to encapsulate related data and behavior
    <li> ES6 Features such as 'let' & 'const'
    <li> ES6 class and constructor function syntax to translate JSON responses into JS model objects
    <li> 3 AJAX calls
    <li> Fetch with the appropriate HTTP verb
</ul>
<h4>Rails</h4>
<ul>
    <li> Rails Models/Controllers and RESTful conventions 
    <li> Serializers
    <li> Sql
    <li> ActiveRecord
    <li> ORM - Object Relational Mapping between Models
        <ol> 
            <li>belongs_to
            <li>has_many
        </ol>
    <li> The following CRUD functionality:
        <ol>
            <li>Create
            <li>Read
            <li>Delete
        </ol>
    <li> One class level Active Record Scope methods
</ul>

<h2>Install Instructions</h2>
<h4>Rails Backend:</h4>
<ul>
    <li> Here is a link to my <a href="https://github.com/gracenak/bon_vivant_backend.git">Rails API Backend</a> to clone.
    <li> Run 'bundle install'
    <li> Run 'rake db:migrate' # migrates the tables into the database
    <li> Run 'rake db:seed'    # migrates seed file containing initial data to test the application with
    <li> Run the server with 'rails s'. Click here to see the JSON view of the <a href="http://localhost:3000/api/v1/recipes">recipe objects and their associations to reviews</a>.
</ul>

<h4>React Frontend: </h4>
<ul> 
    <li> Clone <a href="https://github.com/gracenak/bon_vivant_frontend.git">this repo</a>.
    <li> npm install 
    <li> npm start
    <li> visit <a>http://localhost:3001</a>
</ul>


<h2>Contributor's Guide </h2>
Bon Vivant is dedicated to bringing a welcoming, harrassment free, working environment. Please see the <a href="https://www.contributor-covenant.org/version/2/0/code_of_conduct/">Contributer Covenant Conduct of Code</a>.

<h2>License</h2>
This application is available as open source under the terms of the <a href="https://opensource.org/licenses/MIT">MIT License</a>.