//
// allow/deny rules
//
// insert, update, remove have allow/deny rules
//
// You define those for each collection (db)
// our db is located at /lib/main.js as a global variable
// so we can play with it
//

function ifComedian(userID, doc){
  return doc.hasOwnProperty('comedian');
  // if undefined, then the methods below
  // will not perform any operation
  // on the database
}


// API: http://docs.meteor.com/#/full/allow
//
DB.allow({
  insert: ifComedian,
  update: ifComedian,
  remove: ifComedian
});
//
// the same api goes for collection.deny
//
// -------
// To test this, run your server
//
// $ meteor
//
// remove the insecure package if you haven't yet
//
// $ meteor remove insecure
//
// go to the mongo instance runing for meteor
//
// $ meteor mongo
//
// in the mongo shell you will be able to do
// whatever you want, but try and go to the
// browser console and do the same...
//
// in this folder the insecure package is already
// removed
