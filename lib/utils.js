var objectKeys = require('object-keys')

module.exports = {
  keysToLowerCase: keysToLowerCase,
  setBool: setBool
}

function keysToLowerCase (obj) {
  if (
    !typeof (obj) === 'object' ||
    typeof (obj) === 'string' ||
    typeof (obj) === 'number' ||
    typeof (obj) === 'boolean'
  ) {
    return obj
  }

  var keys = objectKeys(obj)
  var n = keys.length
  var lowKey

  while (n--) {
    var key = keys[n]
    if (key === (lowKey = key.toLowerCase())) continue
    obj[lowKey] = keysToLowerCase(obj[key])
    delete obj[key]
  }

  return (obj)
}

function setBool (str) {
  if (str === 'true') return true
  if (str === 'false') return false
  return str
}
