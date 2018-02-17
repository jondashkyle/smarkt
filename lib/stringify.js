var objectKeys = require('object-keys')
var assert = require('assert')
var yaml = require('js-yaml')

module.exports = stringify

function stringify (obj) {
  assert.equal(typeof obj, 'object', 'smarkt: arg1 str must be type object')

  return objectKeys(obj)
    .reduce(function (result, key) {
      var value = typeof obj[key] === 'undefined' ? '' : obj[key]
      if (typeof value === 'object') {
        result.push(yaml.safeDump({ [key]: value }))
      } else {
        result.push(key + ': ' + value)
      }

      return result
    }, [ ])
    .join('\n----\n')
}
