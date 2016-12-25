/**
 * Created by voliseq on 25.12.2016.
 */
function counter(io,time_left,room_id){
    return setTimeout(function(){
        io.to(room_id).emit('counter', time_left);
        time_left--;
        counter(io, time_left, room_id);
    }, 1000);
}
module.exports = counter;