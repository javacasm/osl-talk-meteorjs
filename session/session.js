if (Meteor.isClient) {
  //
  // We wrap the code in Meteor.startup
  // so its run after all the script tags are loaded
  //
  Meteor.startup(function(){

    Session.setDefault('count', 0);

    Deps.autorun(function(){
      document.body.textContent =
        'count ' + Session.get('count');
    });

    setInterval(function(){
      var count = Session.get('count');
      Session.set('count', count+1);
    }, 1000);

  });
  //
  // Session is persistent through page loads as well
  // try to play with the code here and look at the
}

if (Meteor.isServer) {
  //
  // Session is not available on the server
  //
}
