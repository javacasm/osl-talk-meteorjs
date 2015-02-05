//
// The Accounts package is a complete solution for accounts
// managing. Here is what you need to know to get started:
//
// - Add the account package you want to use, i.e. github
//
//    $ meteor add accounts-github
//
// - Install the accounts-ui package
//    http://docs.meteor.com/#/full/accountsui
//
// - Add {{> loginButtons}} to a template
//   In our case go to "./accounts.html"
//
// - Start the meteor server
//
//    $ meteor
//
// - Go to http://localhost:3000
//    You see that red button? Niiice
//
// - Follow the instructions
// - Login with your github account
// - Open the console
//
// Of course there is a lot more, you can read it here:
//  http://docs.meteor.com/#/full/meteor_loginwithexternalservice

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
