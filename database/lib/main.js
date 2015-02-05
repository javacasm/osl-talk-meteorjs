//
// If you only want to define a database once
// do it on lib/ or in the main directory of your app
//

DB = new Mongo.Collection('db');

if(Meteor.isClient){
  Meteor.subscribe('comedians');
}

if(Meteor.isServer){

  Meteor.publish('comedians', function(){
    return DB.find({comedian: true});
  });
}
