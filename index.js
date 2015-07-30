'use strict'

var SelectorTokenizer = require('css-selector-tokenizer')

module.exports = function getCssClasses(selector) {
  if (typeof selector !== 'string') {
    throw new TypeError('get-css-classes expects a string')
  }

  var tokens = SelectorTokenizer.parse(selector).nodes[0] || { nodes: [] }
  return tokens.nodes.filter(function(token) {
    return token.type === 'class'
  }).map(function(classToken) {
    return '.' + classToken.name
  })
}
