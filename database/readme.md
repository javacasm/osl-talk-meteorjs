# database

 Meteor handles data in an streaming manner
 from client to server.

 One of the most difficult and useful things to setup.

 By default you have a [MongoDB](http://docs.mongodb.org) database created and ready to use. To create a new collection on this database you only need to

```js
var collection = new Mongo.Collection('things');
```

The mongo `shell` is available in your console by using directly `meteor mongo` and you also can use your database directly on the browser console. This is the default for a Meteor application.

Also by default, all clients can potentially make operations on your database. To change it:

    meteor remove insecure autopublish

The first package allows inserts, removes and updates
from the client to your server database. This is useful of course for security among other things. The second package publishes all your dataabase documents to the client.

As you can see a meteor application is setup from the begining for fast and easy prototyping. So you can care about real-wold things once you have the skeleton ready.

Official documentation
 - [Mongo Collections](http://docs.meteor.com/#/full/mongo_collection)
 - [Publish and subscribe](
    http://docs.meteor.com/#/full/meteor_publish
   )
 - [Allow and deny rules](
    http://docs.meteor.com/#/full/allow
   )
