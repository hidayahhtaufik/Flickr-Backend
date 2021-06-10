let Parser = require('rss-parser');
let parser = new Parser();

class Controller {
    static async getData(req, res) {
        (async () => {
            
            let feed = await parser.parseURL('https://www.flickr.com/services/feeds/photos_public.gne');
            console.log(feed);
            
            // feed.items.forEach(item => {
                res.status(200).json(feed)
            // });
        })();

    }
}

module.exports = Controller