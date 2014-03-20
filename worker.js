/**
 * Hoodie plugin debug
 */

module.exports = function (hoodie, callback) {
  'use strict';

  // make sure plugin DB exists
  var plugin_db_name = 'plugin/debug';
  hoodie.database.add(plugin_db_name, function (error) {
    if (error && error.error !== 'file_exists') {
      console.log(error);
      return callback(error);
    }
    return callback();
  });
  // plugin initialization complete
};
