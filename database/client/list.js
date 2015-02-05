

Template.list.helpers({
  comedian: function(){
    var search = Session.get('search') || '';
    if(search.trim()){
      try {
        search = new RegExp(search, 'i');
        var result = DB.find({name: {$regex: search}});
        return result.count() ? result : DB.find();
      } catch(err){
        return DB.find();
      }      
    } else {
      return DB.find();
    }
  }
});

//
// Let's hook those helpers above with
//

Template.list.events({
  'keyup input': function(e){
    Session.set('search', e.target.value);
  },
  'blur input': function(e){
    Session.set('search', '');
  }
});
