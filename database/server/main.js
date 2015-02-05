//
// publish/subscribe or pub-sub pattern
//


//
// Populate database
//

;[
  'Gila',
  'Louie CK',
  'Jay Lenno',
  'Chris Rock',
  'Berto Romero',
  'George Carlin',
  'Craig Ferguson',
  'Jerry Seinfeld',
  'David Letterman',
  'Andreu Buenafuente',
  'Chiquito de la Calzada'
  ].forEach(function(name){
    if(DB.find({name: name}).count()){
      return ;
    }
    var urlEncodedName = encodeURI(name.toLowerCase().replace(/[ ]+/g, '-'));
    var url = 'http://graph.facebook.com/'+urlEncodedName+'/picture';
    var query = 'with=200&height=200&redirect=0&type=normal';
    HTTP.get(url, {query: query}, function(err, res){
      DB.insert({
        comedian: true,
        name: name,
        picture: res.data
      });
    });
  });
