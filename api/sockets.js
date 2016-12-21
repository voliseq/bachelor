var socketio = require('socket.io')

module.exports.listen = function(app){
    io = socketio.listen(app);

    io.sockets.on('connection', function(socket){

        socket.on('create', function(room){
            socket.join(room);
            socket.on('bid', function(data){
                io.sockets.in(room).emit('priceUpdate', data);
            })
        });

    });



    return io
}