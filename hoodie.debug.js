/**
 * Hoodie plugin template
 * An example plugin, this is where you put your frontend code (if any)
 */

/* global Hoodie */

Hoodie.extend(function (hoodie) {
  'use strict';

  // extend the hoodie.js API
  hoodie.debug = function (obj) {
    // send to /_api/_plugins/debug/_api/
    // with Content-Type: application/json
  };
});
