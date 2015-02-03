MeteorDB = new Meteor.Collection('meteorDB', {
  transform: function(doc){
    doc.title = doc.body.match(/.*?\./)[0];
    doc.body = doc.body.replace(doc.title, doc.title + '\n\n');
    return doc;
  }
});

if (Meteor.isClient) {
  // counter starts at 0

  Template.principios.helpers({
    idea: function () {
      return MeteorDB.find();
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    if(!MeteorDB.find().count()){
      ;[
        {
          body: "Datos. Meteor no envia HTML. El servidor envia datos y el cliente los renderiza."
        },
        {
          body: "Un lenguaje. Meteor te deja escribir tanto el servidor como el cliente de tu aplicación en Javascript."
        },
        {
          body: "Base de datos en todas partes. Puedes usar los mismos metodos de tu base de datos en el servidor o en el cliente"
        },
        {
          body: "Compensación de latencia. En el cliente, Meteor precarga datos y simula qué ocurriría al llamar al servidor haciendo llamadas a este instantáneas."
        },
        {
          body: "Reactividad Full Stack. En Meteor, tiempo real está por defecto. Todas las capas, desde la base de datos a los templates, se actualizan autmáticamente cuando es necesario."
        },
        {
          body: "Acepta el Ecosistema. Meteor es código abierto y se integra con herramientas y frameworks de código abierto existentes."
        },
        {
          body: "Simplicidad y productividad. La mejor manera de hacer algo que parece simple es tenerlo como simple. La funcionalidad básica de Meteor tiene APIs limpias y clásicamente preciosas."
        }
      ].forEach(function(princpio){
        MeteorDB.insert(princpio);
      });
    }
  });
}
