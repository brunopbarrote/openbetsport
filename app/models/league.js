var mongoose = require('mongoose');

module.exports = mongoose.model('League', {
    leagueCode: String,
    country: String,
    league: String
});
