if (Meteor.isClient) {
  Template.users.helpers({
    user: function(){
      return Meteor.users.find();
    },
    json: function(user){
      return JSON.stringify(user, null, 2);
    }
  });
}

if (Meteor.isServer) {
  Meteor.users.find().observe({
    added: function(user){
      console.log('New user registered', user);
    },
    changed: function(user, userOld){
      console.log('User changed');
      console.log('to', user);
      console.log('from', userOld);
    },
    removed: function(user){
      console.log('User', user);
      console.log('was removed');
    }
  });

}
