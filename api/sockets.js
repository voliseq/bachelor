var socketio = require('socket.io')
var Room = require('./models/room');
module.exports.listen = function(app){
    io = socketio.listen(app);

    var rooms = [];

    io.sockets.on('connection', function(socket){
        console.log("connected: "+socket.id);
        socket.emit('room.joined', socket.id + 'joined default room');
        console.log(socket.id +' joined default room');
        socket.on('room.join', function(room){
            socket.join(room);

            var newRoom = new Room(room);
            rooms.push(newRoom);
            io.to(room).emit('room.joined', socket.id + 'joined the ' + room);
        });

        socket.on('bid', function(data){
            var room = data.room;
            var price = data.price;
            var roomFromArray = rooms.find(r => r.id == room);

            roomFromArray.leader = socket.id;
            roomFromArray.people.push[socket.id];
            socket.emit('leader');
            io.to(room).emit('priceUpdate', price);

        })

    });



    return io
}