var socketio = require('socket.io'),
    Room = require('./models/room'),
    counter = require('./helpers/counter');



module.exports.listen = function(app){
    io = socketio.listen(app);

    var rooms = [],
        room_id,
        price,
        room,
        time_left;

    io.sockets.on('connection', function(socket){
        console.log("connected: "+socket.id);
        socket.emit('room.joined', socket.id + 'joined default room');
        console.log(socket.id +' joined default room');
        socket.on('room.join', function(room_id){
            socket.join(room_id);
            var newRoom = new Room(room_id);
            rooms.push(newRoom);
            io.to(room_id).emit('room.joined', socket.id + 'joined the ' + room_id);
        });

        socket.on('bid', function(data){



            room_id = data.room_id;
            price = data.price;
            room = rooms.find(r => r.id == room_id);
            time_left = 10;

            if(!room.timer){
               var counter = setInterval(function() {
                    if(time_left >= 0 ) {
                        io.to(room_id).emit('counter', time_left);
                    }
                    else{
                        clearInterval(counter);
                        io.to(room_id).emit('auction.end');
                        io.to(room.leader).emit('auction.winner');
                    }
                    time_left--;
                }, 1000);

                room.timer = true;
            }

            if(room){
                io.to(room.leader).emit('new leader');
                room.leader = socket.id;
                room.addPerson(socket.id);
                room.bid_time = data.bid_time;
            }
            socket.emit('leader');
            io.to(room_id).emit('priceUpdate', price);

        })

    });



    return io
}