<h1>Bon Vivant</h1>

A collection of recipes for people to share and review. 

This react application was created as a project requirement for the <a href="https://flatironschool.com/career-courses/coding-bootcamp/online">Flatiron Online Software Engineering Program</a>.

For more information, check out <a href="https://gracenak.medium.com/debugging-typeerror-cannot-read-property-value-of-undefined-f1c729df00b6">my blog</a> and a <a href="https://www.youtube.com/watch?v=r4Jg6Goo1lM&feature=youtu.be">walkthrough demonstration</a> of this project.

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