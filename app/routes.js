var request = require('request');
var cheerio = require('cheerio');
var ge = require('./helpers/ge');
var http = require('http');
var Leagues = require('./models/league');

module.exports = function(app) {
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
