if(Schemas === undefined){
  var Schemas = {};
}

Schemas.Pad = new SimpleSchema({
/*  vars:{
    type: [Object],
    optional: true
  },
  equations:{

  },
  display:{
    type: String,
    label: "Calculation",
    optional: true,
    autoform: {
      type: "textarea",
      rows: 8
    }
  }*/

  name:{
    type:String,
    autoform:{
      'label-type': 'stacked'
    }
  },
  x:{
    type:Number,
    optional:true,
    autoform:{
      'label-type': 'stacked'
    }
  },
  y:{
    type:Number,
    optional:true,
    autoform:{
      'label-type': 'stacked'
    }
  },
  operator:{
    type:String,
    optional:true,
    autoform:{
      'label-type': 'stacked'
    }
  }



});

Pads.attachSchema(Schemas.Pad, {replace: true});