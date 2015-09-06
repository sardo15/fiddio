var api = function(app, router) {
  require('./apis/users')(app, router);
  require('./apis/questions')(app, router);
  require('./apis/responses')(app, router);

  return router;
};

module.exports = api;