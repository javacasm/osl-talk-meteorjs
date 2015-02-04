//
// Templates have "helpers" and "events" methods
//

if (Meteor.isClient) {

 Session.set('page', {});

 Template.page.helpers({
   title: function(){
     return Session.get('page').title;
   },
   body: function(){
     return Session.get('page').body;
   },
   date: function(){
     return Session.get('page').date;
   }
 });

 //
 // Events can be treated just like in jquery
 // with the huge diference that you can restrict
 // them to the template contents
 //
 Template.page.events({
   'mouseenter h2': function(e){
     e.target.textContent = '';
   },
   'mouseenter p': function(e){
     e.target.textContent = '';
   },
   'mouseleave h1': function(e, template){
     var page = Session.get('page');
     var title = e.target.textContent.trim();
     if(title.trim()){
       page.title = title;
       Session.set('page', page);
     }
   },
   'mouseleave p': function(e){
     var page = Session.get('page');
     var body = e.target.textContent.trim();
     if(body.trim()){
       page.body = body;
       page.date = new Date();
       Session.set('page', page);
     }
   }
 });

 //
 // We are usin Session as database,
 // which is not recommended at all
 // use a database instead, for that you can see
 // the tag 'templates.db'
 //
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
