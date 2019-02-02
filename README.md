# Eat-Da-Burger-

**How The App Works**

*Eat-Da-Burger!* is a restaurant app that lets users input the names of burgers they'd like to eat. Once the user submits a burger's name, the app displays the name of the burger on the left side of the page, in a 'waiting' area. Each burger in the waiting area has a *Devour it!* button. When the user clicks on it, the burger will move to the right side of the page. The app will store every burger in a database, whether devoured or not. 

---
<img src="https://github.com/Heidijvr/Eat-Da-Burger-/blob/master/public/assets/img/EatDaBurger.png" alt Burger App Home Page>

---

Try out the Application here *(https://friend-finder-app55.herokuapp.com/)*!


**Functionality**

Using an home-grown ORM, the app has 3 basic CRUD functions...

- *READ* all entries from the MySQL database and display them to the DOM using Handlebars.
- *UPDATE* a selected burger by clicking "Devour It", which... 
  * hits an /burger/eat/:id route in Express to change its "devoured" status,   
  * in the MySQL database * re-routes the webpage back to the index, where the burger is now in the devoured column (via Handlebars).
- *CREATE* a new burger which... 
* hits a /burger/create route in Express to insert a new burger into the - MySQL database 
* re-routes the webpage back to the index, where the burger is now ready to be eaten column (via Handlebars)

**Technology Used**

This app uses Handlebars, MySQL, Node, Express, and a homemade ORM to create the burger logger. It follows the MVC design pattern and Node to Query the route data for the app. Handlebars was used to generate the HTML.

---
This is an assignment is in fulfillment of the requirements for the bootcamp of the University of Washington (September 2018 - April 2019)
