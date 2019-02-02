# Eat-Da-Burger-

This app uses Handlebars, MySQL, Node, Express, and a homemade ORM to create a burger logger. I followed the MVC design pattern and Node to Query the route data for the app. Handlebars was used to generate all of my HTML.

N.C.B.C. homework assignment week 14, to create a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM. Being sure to follow the MVC design pattern; use Node and MySQL to query and route data in the app, and use Handlebars to generate your HTML.

Instructions
Type a burger name into the app and add it.
Burger will be added to the "Burgers Available to Eat" section of the page.
Select a burger you would like to Devour from the "Burgers Available to Eat List".
Burger will be moved to the "Burgers That Have Been Devoured" section of the page.

### Try out the Application!

https://friend-finder-app55.herokuapp.com/



How The App Should Work
Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat. Whenever a user submits a burger's name, your app will display the burger on the left side of the page -- waiting to be devoured. Each burger in the waiting area also has a Devour it! button. When the user clicks it, the burger will move to the right side of the page. Your app will store every burger in a database, whether devoured or not.

Overview
A Node, Express, Handlebars, and MySQL burger app that lets users input the names of burgers they'd like to eat... and then devour them! Please check out the launched app on Heroku here!

Functionality
Using an home-grown ORM, the app has 3 basic CRUD functions...

READ all entries from the MySQL database and display them to the DOM using Handlebars.
UPDATE a selected burger by clicking "Devour It", which... * hits an /burger/eat/:id route in Express to change its "devoured" status in the MySQL database * re-routes the webpage back to the index, where the burger is now in the devoured column (via Handlebars)
CREATE a new burger using the "Place Order" form, which... * hits a /burger/create route in Express to insert a new burger into the MySQL database * re-routes the webpage back to the index, where the burger is now ready to be eaten column (via Handlebars)

This is an assignment is in fulfillment of the requirements for the bootcamp of the University of Washington (September 2018 - April 2019)
