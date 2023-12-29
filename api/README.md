# In the Know in GSO Express backend

## What It Does
Searches several websites that list events to attend locally and returns a JSON of multiple events happening soon in the Greensboro, North Carolina area.

It achieves this by web scraping each page and returning an array of objects containing the events.

## Getting Started
* Clone or fork this repo.
* Open in your IDE of choice and install dependents with `npm install` in the command line.
* Run the program in the command line with `npm run start`.
* Navigate to `http://localhost:9000/` in your browser.

## Dependencies
* Cheerio
* Express
* Axios 
* cookie-parser
* debug
* http-errors
* jade
* morgan
* nodemon

## End-Points
* `/` - home page

## Sites to crawl
* [Downtown Greensboro](https://www.downtowngreensboro.org/events/)
* [All Events](https://allevents.in/greensboro/this-weekend)
* [EventBrite](https://www.eventbrite.com/d/nc--greensboro/events/)