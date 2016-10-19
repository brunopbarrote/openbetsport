var Leagues = require('../models/league');

module.exports = function(app) {
    app.get('/api/leagues', function(req, res) {
        Leagues.find({}, function(err, result) {
            if (err)
                res.send(err)

            res.json(result); // return all todos in JSON format
        });
    });
};
