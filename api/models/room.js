/**
 * Created by voliseq on 23.12.2016.
 */
var room = function(id){
    this.people = [];
    this.id = id;
    this.leader = '';
    this.bid_time = null;
    this.timer = null;

    this.addPerson = function(person){
        this.people.push(person);
    };
    this.removePerson = function(person){
        this.people.splice(this.people.indexOf(person),1);
    };

};

module.exports = room;