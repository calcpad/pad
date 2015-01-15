AutoForm.hooks({
  "pad-add":{
    onSuccess: function (operation, result, template) {
      Session.set('padId',result);
      IonModal.close();
      Router.go('padDetail',{},{query:{padId:Session.get('padId')}});
    }
  }
});