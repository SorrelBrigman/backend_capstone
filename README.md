# backend_capstone - API for Similar Tastes Nashville


This is the backend REST API for the application "Similar Tastes"

You can find the repo for the front end of this application here:
https://github.com/SorrelBrigman/similar_tastes_nashville

Mockups and the ERD for the site can be found in the ERD_and_Mockups folder.
Mockups were considered a basic starting point, not the final design decision.


The Trello board used for this project can be found here:
https://trello.com/b/OsxMDFwM/back-end-capstone

# Technology Used:

* Node.js
* Express
* Cheerio.js
* PostgreSQL
* Knex
* Bookshelf
* CORS
* Chai
* Mocha
* Chai-Http



# The Process

The Scraper folder houses functions used to scrape data for the dataset for the application.  The top 500 restaurant in Nashville (per Yelp on May 5, 2017) are included in the dataset, as well as all of the Yelp reviews for each restaurant (reviews dated on or before May 5, 2017).

I wanted three datasets: restaurant information (acquired through it's own scraping series), user information and review information.  The user information would be aquired by going through the scraped reviews and finding all of the unique users. The dataset acquired from gathering all the reviews for all of the listed Nashville restaurants resulted in a file larger than my personal computer could manage when it came to directly parsing and removing multiple instances of a user (if a user had multiple reviews).  The writeUsers.js file contains the logic to sort reviews by user, remove duplicates of users, and write a unique users.json file (rather than having my computer manipulate the reviews file to create the users table while seeding).

You will need to make sure the json files are fully linted to seed your files successfully (the scrapers write objects separated by commas, but do not open on close the square brackets needed to create an array of objects to seed the db). Yelp limits the number of times you can access their website per day per IP address, so it was needed to gather the data over multiple days.

The dataset I used contained over 490 restaurants, over 41,000 users and almost 90,000 reviews.  Some of these files are larger than gitHub allows on their standard version, so not all database files are able to be pulled down from this repo.

# The Features

The API is supported by a PostgreSQL database, using Knex/Bookshelf as the ORM.  The API's functionality is currently limited to what is needed by the Similar Tastes Nashville FrontEnd (uses get only get requests).

The API is able to deliever all the restaurants, a single restaurant, restaurants a single user has reviewed, all reviews, reviews by user, reviews by users who have reviewed a certain restaurant in a certain way, as well as reviews for a second restaurant based on the users who reviewed a primary restaurant in a certain way.


## Contributor: Sorrel Brigman
