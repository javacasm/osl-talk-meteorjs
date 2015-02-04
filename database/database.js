var db = Mongo.Collection('db');

//
// Either on the client (via cache)
// or in the server (via fibers npm package)
// database calls in Meteor appear to be totally synchronous
//

if(!db.find().count()){
  // so do don't do this twice

  db.insert({comedian: 'Craig'});

  //
  // The language is also the same in the server
  // and in the client
  //

  db.update(db.findOne({comedian: 'Craig'})._id, {
    $set : {surname: 'Ferguson'}
  });

  //
  // Both of those operations will fail if
  // you removed the insecure package
  // for those to pass you have to set allow/deny rules
  // in the server so you can make something with the database
  //
  // if you don't know mongodb go to their webpage
  // there you can find all the api
  //  http://docs.mongodb.org/manual/tutorial
}
