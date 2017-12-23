var objectKeys = require('object-keys')
var yaml = require('js-yaml')

module.exports = write

function write (obj) {
  return objectKeys(obj)
    .reduce(function (result, key) {
      var value = obj[key]
      if (typeof value === 'object') {
        result.push(yaml.safeDump({ [key]: value }))
      } else {
        result.push(key + ': ' + value)
      }

      return result
    }, [ ])
    .join('\n\n----\n\n')
}
