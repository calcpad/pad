Template.padDetail.helpers({
  outputHelper:function(){
    if(this.pad.x && this.pad.y && this.pad.operator)
    {
      var x = this.pad.x;
      var y = this.pad.y;
      var o = this.pad.operator;

      return eval("x"+o+"y");
    } else {
      return "Equation is not complete"
    }

  }
});
Template.padDetail.events({  });
Template.padDetail.rendered = function() {  };
Template.padDetail.created = function() {  };
Template.padDetail.destroyed = function() {  };
