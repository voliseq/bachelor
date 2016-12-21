var socketio = require('socket.io')

module.exports.listen = function(app){
    io = socketio.listen(app);

    io.on('connection', function(socket){
        console.log('connection');
        socket.on("bid", function(data){
            console.log(data);
            socket.emit('priceUpdate',data);
            socket.broadcast.emit('priceUpdate',data);
        });

    });



    return io
}