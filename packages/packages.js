if (Meteor.isClient) {

  // On the client there is a global Package
  // where are installed packages go
  //
  // Also, Meteor packages could export its own globals
  // to the server or the client, and the global name may
  // or may not be the same as the package name. For example,
  // underscore is exported as `_`
  //
  Template.packages.helpers({
    package: function(){
      return Object.keys(Package);
    },
    MeteorRepoTree: 'https://github.com/meteor/meteor/tree/devel/packages'
  });
}

if (Meteor.isServer) {
  // Meteor has no `commonjs` require function
  //
  // try {
  //   require('http');
  // } catch(err){
  //   console.log(err.stack);
  // }

  // Third party packages have to use Npm.require
  // instead of `node`'s require and have to be
  // installed in a special folder
  //
  // > see the readme to see how to do this
  //
  var http = Npm.require('http');
  var React = Npm.require('react');

}
