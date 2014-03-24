module.exports = function (hoodie) {
  var plugin_db_name = 'plugin/debug';

  return {
    'server.api.plugin-request': function (request, reply) {
      console.log('debug hook called');

      var plugin_db = hoodie.database(plugin_db_name);
      plugin_db.add('debug', request.payload, function (error) {
        if (error) {
          console.log('adding debug info failed:');
          console.log(error);
          console.log(request.payload);
          reply(JSON.stringify({'status': 'error', 'error': error}));
        }
        reply(JSON.stringify({'status': 'ok'}));
      });
      return true;
    }
  };
};
