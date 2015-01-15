Template.padsList.helpers({ });
// FYI: padListToggle is a global helper in client/views/helpers.js

Template.padsList.events({  });
Template.appLayout.events({
  "click [data-action=padListToggleEdit]": function() {
    Session.set('padListEdit',true);
  },
  "click [data-action=padListToggleIndex]": function() {
    Session.set('padListEdit',false);
  }
});


Template.padsList.rendered = function() {
  //console.log(this);
};
Template.padsList.created = function() {  };
Template.padsList.destroyed = function() {  };