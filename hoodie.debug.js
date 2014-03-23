/**
 * Hoodie plugin template
 * An example plugin, this is where you put your frontend code (if any)
 */

/* global Hoodie */

Hoodie.extend(function (hoodie) {
  'use strict';

  // extend the hoodie.js API
  hoodie.debug = function debug(obj) {
    if (! obj) return;

    // debug promises
    if (typeof obj.done === 'function') {
      return obj.done(hoodie.debug);
    }

    if (obj.length && obj[0].createdAt) {
      console.table(obj);
    } else {
      console.dir(obj);
    }
  };

  // send a dump of localStorage to the backend
  hoodie.dump = function dump(data) {
    var date = new Date();
    var timestamp = date.toISOString().replace(/[^\d]/g, '');
    var id = hoodie.id() + '-' + timestamp;

    if (! data) {
      try {
        for (var key, value, i = 0; i < localStorage.length; i++) {
          key = localStorage.key(i);
          value = localStorage.getItem(key);
          data[key] = value;
          try {
            data[key] = JSON.parse(value);
          } catch (e) {}
        }
      } catch (e) {}
    }

    hoodie.request('POST', '/_plugins/debug/_api/', {
      contentType: 'application/json',
      data: JSON.stringify({
        id: id,
        hoodieId: hoodie.id(),
        username: hoodie.account.username,
        data: data
      })
    });
  };

  // send to /_api/_plugins/debug/_api/
  // with Content-Type: application/json
});
