PadsListController = AppController.extend({
  waitOn: function() {
    return Meteor.subscribe('pads');
  },
  data: function() {return {
    padsList: Pads.find({},{sort:{name:1}})}
  },
  action: function() {
    if (this.ready()) {
      this.render('padsList');
    }else{
      this.render('loading')
    }
  }
});


PadDetailController = AppController.extend({
  waitOn: function() {
    return Meteor.subscribe('pad', this.params.query.padId);
  },
  data: function() {
    return {
      pad: Pads.findOne(this.params.query.padId)
    }
  },
  action: function() {
    if (this.ready()) {
      this.render('padDetail');
    }else{
      this.render('loading')
    }
  }
});