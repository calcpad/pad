Router.route('/', {
  name: 'padsList',
  controller: 'PadsListController'
});

Router.route('/pad', {
  name: 'padDetail',
  controller: 'PadDetailController'
});