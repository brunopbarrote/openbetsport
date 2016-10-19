module.exports = function(io) {
    io.on('connection', function(socket) {
        console.log(socket.request.connection.remoteAddress);

        socket.on('results-league', function(msg) {
            console.log('message: ' + msg);
        });
    });
};
