const axios = require('axios');
const cheerio = require('cheerio');

// home route
exports.index = function (req, res, next) {

  res.json("Welcome to Greensboro, NC! Let's check out what is happeneing around town!");

}

// local activities route
exports.local_activities = async function (req, res, next) {

  const eventWebsites = [
    {
      name: 'EventBrite',
      url: 'https://www.eventbrite.com/d/nc--greensboro/events/',
      baseUrl: 'https://www.eventbrite.com',
      searchCommand: 'a.event-card-link'
    },
    /*{
      name: 'Redfin',
      url: 'https://www.redfin.com/city/7161/NC/Greensboro',
      baseUrl: 'https://www.redfin.com',
      searchCommand: 'a:contains("NC")'
    }*/
  ];
  
  const activities = [];

  try {

    for(let i = 0; i < eventWebsites.length; i++) {

      await axios.get(eventWebsites[i].url)
      .then((response) => {

        const html = response.data;
        const $ = cheerio.load(html);
    
        //look for searchCommand unique to each site
        $(eventWebsites[i].searchCommand, html).each(function() {

          const title = $(this).text();
          const url = $(this).attr('href');
          
          activities.push({
            title,
            url: eventWebsites[i].baseUrl + url,
            name: eventWebsites[i].name
          });
        });
      });
    }
    console.log(activities);
    res.json(activities);

  } catch (error) {
    
    console.error(error);
    res.send( { error: error } );

  }
}
