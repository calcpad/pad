
/* LIST OF PADS */
Meteor.publishComposite('pads', function() {
  return {
    find: function(){
      return Pads.find();
    }
  }
});


/* SINGLE PAD */
Meteor.publishComposite('pad', function(passedId) {
  check(passedId, String);
  return {
    find: function(){
      return Pads.find({_id:passedId});
    },
    children:[
      // user data ?
      // team data ?
      // history data ?
    ]
  }
});