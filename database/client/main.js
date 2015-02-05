
// will fail
DB.insert({joker: 'Hello bunny'});

// will succeed
DB.insert({comedian: 'Louie'});

function onAddedChanged(doc, oldDoc){
  var text = '';
  if(!oldDoc){
    text += '\n added:\n ' +
      JSON.stringify(doc);
  } else {
    text += '\n changed:\n ' +
      JSON.stringify(oldDoc) +
      '\n to \n' +
      JSON.stringify(doc);
  }
  document.body.textContent = text;
}

//
// #observe has to be done on a cursor
//
DB.find().observe({
  added: onAddedChanged,
  changed: onAddedChanged
});
