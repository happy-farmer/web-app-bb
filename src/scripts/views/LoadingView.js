/*
 * @module views/HeaderView
 */

 /* global define */

define((require) => {
  'use strict'
  var template = require('mixins/templates').loading
  var Mt = require('marionette')

  return Mt.ItemView.extend({
    template
  })
})
