var assert = require('assert')
var yaml = require('js-yaml')
var xtend = require('xtend')

var utils = require('./utils')

module.exports = parse

function parse (str) {
  assert.equal(typeof str, 'string', 'smarkt: arg1 str must be type string')

  return str
    .split('\n----')
    .filter(str => str)
    .reduce(function (result, field) {
      var data = field
        .replace(/^\s+|\s+$/g, '')
        .split(/:([^]+)/)
        .filter(str => str.trim() !== '')

      var key = data[0].replace(':', '')

      if (data.length >= 2) {
        var value = data[1]

        var firstBreak = value.split('\n', 2)[1]
        var isYaml = typeof firstBreak === 'string' ? firstBreak.substring(0, 2) === '  ' : false

        if (isYaml) {
          try {
            result = xtend(result, yaml.safeLoad(field))
          } catch (err) {
            result[key] = utils.parseSpecial(value.trim())
          }
        } else {
          result[key] = utils.parseSpecial(value.trim())
        }
      } else {
        result[key] = ''
      }

      return result
    }, { })
}
