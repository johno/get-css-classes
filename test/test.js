var assert = require('assert')
var getCssClasses = require('..')

describe('get-css-classes', function() {

  it('should do return an empty array when no classes are found', function() {
    assert.deepEqual(getCssClasses('input[type="email"]:last-child'), [])
  })

  it('it should return an array of CSS classes', function() {
    assert.deepEqual(
      getCssClasses('.some.awesome input[type="email"].css .classes > .here #wootwoot'),
      ['.some', '.awesome', '.css', '.classes', '.here']
    )
  })
})
