var request = require('request');
var cheerio = require('cheerio');
var ge = require('./helpers/ge');

module.exports = function(app) {
    app.get('/football-data.events/api_token.txt', function (req, res){


    });

    app.get('/api/resultadosbr', function(req, res) {
        request('http://globoesporte.globo.com/placar-ge/hoje/', function(error, response, html) {
            // If no errors, execute this block
            if (!error) {
                // load into jquery implementation (cheerio)
                var $ = cheerio.load(html);

                var arr = ge.getJogosBr($);

                res.json(arr);
            } else {
                res.json({
                    status: 404,
                    error: 'Error found!'
                });
            }
        });
    });
};
